import { errorResponse, HttpError } from "../../_lib/http.js";

export async function onRequestGet({ env, request }) {
  try {
    const id = new URL(request.url).searchParams.get("id");
    if (!id || id.length > 100) throw new HttpError(404, "Không tìm thấy ảnh.");
    const record = await env.DB.prepare(
      "SELECT content_type, image_data FROM destination_memory_images WHERE id = ?",
    ).bind(id).first();
    if (!record) throw new HttpError(404, "Không tìm thấy ảnh.");

    const imageBytes = typeof Uint8Array.fromBase64 === "function"
      ? Uint8Array.fromBase64(record.image_data)
      : Uint8Array.from(atob(record.image_data), (character) => character.charCodeAt(0));
    const headers = new Headers({
      "Content-Type": record.content_type,
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": "inline",
    });
    return new Response(imageBytes, { headers });
  } catch (error) {
    return errorResponse(error);
  }
}
