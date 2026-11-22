import {
  errorResponse,
  HttpError,
  json,
  requireOwner,
  validateDestinationId,
  validatePhotoIndex,
} from "../_lib/http.js";

const maximumPhotoBytes = 20 * 1024 * 1024;

export async function onRequestPost(context) {
  let uploadedKey = null;
  try {
    requireOwner(context);
    const form = await context.request.formData();
    const destinationId = validateDestinationId(form.get("destinationId"));
    const photoIndex = validatePhotoIndex(form.get("photoIndex"));
    const file = form.get("file");
    if (!file || typeof file.stream !== "function" || !file.type.startsWith("image/")) {
      throw new HttpError(400, "Tệp phải là ảnh hợp lệ.");
    }
    if (file.size === 0 || file.size > maximumPhotoBytes) {
      throw new HttpError(413, "Ảnh phải có dung lượng từ 1 byte đến 20 MB.");
    }

    const previous = await context.env.DB.prepare(
      "SELECT object_key FROM destination_memories WHERE destination_id = ? AND photo_index = ?",
    ).bind(destinationId, photoIndex).first();
    uploadedKey = `${destinationId}/${photoIndex}/${crypto.randomUUID()}`;
    await context.env.MEMORIES.put(uploadedKey, file, {
      httpMetadata: { contentType: file.type },
    });

    try {
      await context.env.DB.prepare(
        "INSERT INTO destination_memories (destination_id, photo_index, object_key, file_name, content_type) VALUES (?, ?, ?, ?, ?) ON CONFLICT(destination_id, photo_index) DO UPDATE SET object_key = excluded.object_key, file_name = excluded.file_name, content_type = excluded.content_type",
      ).bind(
        destinationId,
        photoIndex,
        uploadedKey,
        String(file.name || `memory-${photoIndex + 1}`).slice(0, 255),
        file.type,
      ).run();
    } catch (error) {
      await context.env.MEMORIES.delete(uploadedKey);
      uploadedKey = null;
      throw error;
    }

    const objectKey = uploadedKey;
    uploadedKey = null;
    if (previous && previous.object_key !== objectKey) {
      try {
        await context.env.MEMORIES.delete(previous.object_key);
      } catch (cleanupError) {
        console.error("Could not remove the replaced memory photo.", cleanupError);
      }
    }
    return json({
      url: `/api/memories/file?key=${encodeURIComponent(objectKey)}`,
      path: objectKey,
      name: file.name || `memory-${photoIndex + 1}`,
      type: file.type,
    }, 201);
  } catch (error) {
    if (uploadedKey) {
      try {
        await context.env.MEMORIES.delete(uploadedKey);
      } catch (cleanupError) {
        console.error("Could not clean up an unreferenced memory photo.", cleanupError);
      }
    }
    return errorResponse(error);
  }
}

export async function onRequestDelete(context) {
  try {
    requireOwner(context);
    const params = new URL(context.request.url).searchParams;
    const destinationId = validateDestinationId(params.get("destinationId"));
    const photoIndexParam = params.get("photoIndex");
    const records = photoIndexParam === null
      ? await context.env.DB.prepare(
        "SELECT photo_index, object_key FROM destination_memories WHERE destination_id = ?",
      ).bind(destinationId).all()
      : await context.env.DB.prepare(
        "SELECT photo_index, object_key FROM destination_memories WHERE destination_id = ? AND photo_index = ?",
      ).bind(destinationId, validatePhotoIndex(photoIndexParam)).all();
    const rows = records.results || [];
    if (!rows.length) return json({ deleted: true });

    const statements = rows.map((row) => context.env.DB.prepare(
      "DELETE FROM destination_memories WHERE destination_id = ? AND photo_index = ?",
    ).bind(destinationId, row.photo_index));
    await context.env.DB.batch(statements);
    try {
      await context.env.MEMORIES.delete(rows.map((row) => row.object_key));
    } catch (cleanupError) {
      console.error("Could not remove deleted memory photo objects.", cleanupError);
    }
    return json({ deleted: true });
  } catch (error) {
    return errorResponse(error);
  }
}
