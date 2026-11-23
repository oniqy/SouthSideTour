import {
  errorResponse,
  HttpError,
  json,
  requireOwner,
  validateDestinationId,
  validatePhotoIndex,
} from "../_lib/http.js";

const maximumPhotoBytes = 1_200_000;

export async function onRequestPost(context) {
  try {
    requireOwner(context);
    const form = await context.request.formData();
    const destinationId = validateDestinationId(form.get("destinationId"));
    const photoIndex = validatePhotoIndex(form.get("photoIndex"));
    const file = form.get("file");
    if (!file || typeof file.arrayBuffer !== "function" || file.type !== "image/jpeg") {
      throw new HttpError(400, "Ảnh cần được nén sang định dạng JPEG trước khi tải lên.");
    }
    if (file.size === 0 || file.size > maximumPhotoBytes) {
      throw new HttpError(413, "Ảnh sau khi nén không được vượt quá 1,2 MB.");
    }

    const photoId = crypto.randomUUID();
    const imageBytes = new Uint8Array(await file.arrayBuffer());
    let binary = "";
    for (let offset = 0; offset < imageBytes.length; offset += 0x8000) {
      binary += String.fromCharCode(...imageBytes.subarray(offset, offset + 0x8000));
    }
    const imageData = btoa(binary);
    await context.env.DB.prepare(
      "INSERT INTO destination_memory_images (id, destination_id, photo_index, image_data, file_name, content_type) VALUES (?, ?, ?, ?, ?, 'image/jpeg') ON CONFLICT(destination_id, photo_index) DO UPDATE SET id = excluded.id, image_data = excluded.image_data, file_name = excluded.file_name, content_type = excluded.content_type",
    ).bind(
      photoId,
      destinationId,
      photoIndex,
      imageData,
      String(file.name || `memory-${photoIndex + 1}.jpg`).slice(0, 255),
    ).run();
    return json({
      url: `/api/memories/file?id=${encodeURIComponent(photoId)}`,
      path: photoId,
      name: file.name || `memory-${photoIndex + 1}`,
      type: "image/jpeg",
    }, 201);
  } catch (error) {
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
        "SELECT photo_index FROM destination_memory_images WHERE destination_id = ?",
      ).bind(destinationId).all()
      : await context.env.DB.prepare(
        "SELECT photo_index FROM destination_memory_images WHERE destination_id = ? AND photo_index = ?",
      ).bind(destinationId, validatePhotoIndex(photoIndexParam)).all();
    const rows = records.results || [];
    if (!rows.length) return json({ deleted: true });

    const statements = rows.map((row) => context.env.DB.prepare(
      "DELETE FROM destination_memory_images WHERE destination_id = ? AND photo_index = ?",
    ).bind(destinationId, row.photo_index));
    await context.env.DB.batch(statements);
    return json({ deleted: true });
  } catch (error) {
    return errorResponse(error);
  }
}
