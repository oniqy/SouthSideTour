import { errorResponse, HttpError } from "../../_lib/http.js";

export async function onRequestGet({ env, request }) {
  try {
    const key = new URL(request.url).searchParams.get("key");
    if (!key || key.length > 300) throw new HttpError(404, "Không tìm thấy ảnh.");
    const record = await env.DB.prepare(
      "SELECT content_type FROM destination_memories WHERE object_key = ?",
    ).bind(key).first();
    if (!record) throw new HttpError(404, "Không tìm thấy ảnh.");

    const object = await env.MEMORIES.get(key);
    if (!object) throw new HttpError(404, "Không tìm thấy ảnh.");
    const headers = new Headers({
      "Content-Type": object.httpMetadata?.contentType || record.content_type || "application/octet-stream",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "Content-Disposition": "inline",
    });
    if (object.httpEtag) headers.set("ETag", object.httpEtag);
    return new Response(object.body, { headers });
  } catch (error) {
    return errorResponse(error);
  }
}
