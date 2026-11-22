(() => {
  const config = window.TRIP_CLOUDFLARE_CONFIG || {};
  const localHosts = new Set(["localhost", "127.0.0.1"]);
  const localCloudOverride = new URLSearchParams(window.location.search).has("cloud");
  const configured = Boolean(config.enabled)
    && (!localHosts.has(window.location.hostname) || localCloudOverride);
  let owner = false;
  let connected = false;

  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    if (options.body && !(options.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    const response = await fetch(`/api/${path}`, {
      ...options,
      headers,
      credentials: "same-origin",
      cache: "no-store",
    });
    const contentType = response.headers.get("content-type") || "";
    const result = contentType.includes("application/json") ? await response.json() : null;
    if (!response.ok) {
      throw new Error(result && result.error ? result.error : "Yêu cầu đồng bộ dữ liệu thất bại.");
    }
    return result;
  }

  function assertOwner() {
    if (!connected || !owner) {
      throw new Error("Chỉ chủ sở hữu đã đăng nhập mới được chỉnh sửa dữ liệu.");
    }
  }

  async function fetchSnapshot() {
    return request("snapshot");
  }

  function toMemoryMap(photos) {
    const memories = new Map();
    photos.forEach((photo) => {
      if (!memories.has(photo.destination_id)) memories.set(photo.destination_id, []);
      memories.get(photo.destination_id)[photo.photo_index] = {
        url: photo.url,
        path: photo.path,
        name: photo.name,
        type: photo.type,
      };
    });
    return memories;
  }

  async function loadSnapshot(localData) {
    const session = await request("auth/session");
    owner = session.isOwner === true;

    let snapshot = await fetchSnapshot();
    if (owner && !snapshot.initialized) {
      await request("bootstrap", {
        method: "POST",
        body: JSON.stringify({
          visitedIds: localData.visitedIds,
          expenses: localData.expenses,
        }),
      });

      const occupiedSlots = new Set(
        snapshot.photos.map((photo) => `${photo.destination_id}:${photo.photo_index}`),
      );
      for (const [destinationId, photos] of localData.memories) {
        for (let photoIndex = 0; photoIndex < photos.length; photoIndex += 1) {
          const photo = photos[photoIndex];
          const slot = `${destinationId}:${photoIndex}`;
          if (!photo || !photo.blob || occupiedSlots.has(slot)) continue;
          await uploadPhoto(destinationId, photoIndex, photo);
          occupiedSlots.add(slot);
        }
      }

      await request("bootstrap/complete", { method: "POST" });
      snapshot = await fetchSnapshot();
    }

    return {
      visitedIds: snapshot.visitedIds,
      expenses: snapshot.expenses,
      memories: toMemoryMap(snapshot.photos),
      isOwner: owner,
    };
  }

  async function initialize(localData) {
    if (!configured) return { configured: false };
    const session = await request("auth/session");
    connected = true;
    owner = session.isOwner === true;
    return { configured: true, ...(await loadSnapshot(localData)) };
  }

  async function signIn(email, password, localData) {
    if (!configured) throw new Error("Chưa bật kết nối Cloudflare.");
    await request("auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    connected = true;
    owner = true;
    return loadSnapshot(localData);
  }

  async function signOut(localData) {
    if (!configured) return { configured: false };
    await request("auth/logout", { method: "POST" });
    owner = false;
    return loadSnapshot(localData);
  }

  async function saveVisitedIds(visitedIds) {
    assertOwner();
    await request("state", {
      method: "PUT",
      body: JSON.stringify({ visitedIds }),
    });
  }

  async function saveExpense(expense) {
    assertOwner();
    await request("expenses", {
      method: "POST",
      body: JSON.stringify(expense),
    });
  }

  async function deleteExpense(id) {
    assertOwner();
    await request(`expenses?id=${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  async function uploadPhoto(destinationId, photoIndex, photo) {
    assertOwner();
    if (!photo || !photo.blob) throw new Error("Không tìm thấy tệp ảnh cần tải lên.");

    const form = new FormData();
    form.set("destinationId", destinationId);
    form.set("photoIndex", String(photoIndex));
    form.set("file", photo.blob, photo.name || `memory-${photoIndex + 1}`);
    return request("memories", { method: "POST", body: form });
  }

  async function deleteMemory(destinationId, photoIndex) {
    assertOwner();
    const params = new URLSearchParams({
      destinationId,
      photoIndex: String(photoIndex),
    });
    await request(`memories?${params}`, { method: "DELETE" });
  }

  async function deleteDestinationMemories(destinationId) {
    assertOwner();
    const params = new URLSearchParams({ destinationId });
    await request(`memories?${params}`, { method: "DELETE" });
  }

  window.tripCloud = {
    configured,
    configurationError: null,
    get isOwner() { return owner; },
    get isConnected() { return connected; },
    initialize,
    loadSnapshot,
    signIn,
    signOut,
    saveVisitedIds,
    saveExpense,
    deleteExpense,
    uploadPhoto,
    deleteMemory,
    deleteDestinationMemories,
  };
})();
