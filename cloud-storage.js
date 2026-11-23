(() => {
  const config = window.TRIP_CLOUDFLARE_CONFIG || {};
  const localHosts = new Set(["localhost", "127.0.0.1"]);
  const localCloudOverride = new URLSearchParams(window.location.search).has("cloud");
  const configured = Boolean(config.enabled)
    && (!localHosts.has(window.location.hostname) || localCloudOverride);
  const maximumSourcePhotoBytes = 20 * 1024 * 1024;
  const maximumStoredPhotoBytes = 1_200_000;
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

  async function compressPhoto(blob) {
    if (!blob || blob.size === 0 || blob.size > maximumSourcePhotoBytes) {
      throw new Error("Ảnh gốc phải có dung lượng từ 1 byte đến 20 MB.");
    }
    if (typeof createImageBitmap !== "function") {
      throw new Error("Trình duyệt này không hỗ trợ nén ảnh. Hãy dùng trình duyệt mới hơn.");
    }

    let bitmap;
    try {
      bitmap = await createImageBitmap(blob);
    } catch {
      throw new Error("Không đọc được ảnh này. Hãy chọn ảnh JPG, PNG hoặc WebP.");
    }

    try {
      const maxDimension = 1800;
      const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
      let width = Math.max(1, Math.round(bitmap.width * scale));
      let height = Math.max(1, Math.round(bitmap.height * scale));
      let quality = 0.84;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d", { alpha: false });
      if (!context) throw new Error("Không thể xử lý ảnh trong trình duyệt này.");

      for (let attempt = 0; attempt < 12; attempt += 1) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(bitmap, 0, 0, width, height);
        const compressed = await new Promise((resolve, reject) => {
          canvas.toBlob((result) => {
            if (result) resolve(result);
            else reject(new Error("Không thể nén ảnh."));
          }, "image/jpeg", quality);
        });
        if (compressed.size <= maximumStoredPhotoBytes) return compressed;

        if (quality > 0.56) {
          quality = Math.max(0.5, quality - 0.08);
        } else {
          width = Math.max(1, Math.floor(width * 0.85));
          height = Math.max(1, Math.floor(height * 0.85));
          quality = 0.82;
        }
      }
      throw new Error("Ảnh vẫn quá lớn sau khi nén. Hãy chọn ảnh khác.");
    } finally {
      bitmap.close();
    }
  }

  async function uploadPhoto(destinationId, photoIndex, photo) {
    assertOwner();
    if (!photo || !photo.blob) throw new Error("Không tìm thấy tệp ảnh cần tải lên.");
    const compressedPhoto = await compressPhoto(photo.blob);

    const form = new FormData();
    form.set("destinationId", destinationId);
    form.set("photoIndex", String(photoIndex));
    const baseName = (photo.name || `memory-${photoIndex + 1}`).replace(/\.[^.]+$/, "");
    form.set("file", compressedPhoto, `${baseName}.jpg`);
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
