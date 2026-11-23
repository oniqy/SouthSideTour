import { errorResponse, json } from "../_lib/http.js";

export async function onRequestGet({ env, request }) {
  try {
    const [state, expenses, photos, imported] = await Promise.all([
      env.DB.prepare("SELECT visited_place_ids FROM trip_state WHERE id = 'main'").first(),
      env.DB.prepare("SELECT id, amount, category, timestamp FROM expenses ORDER BY timestamp DESC").all(),
      env.DB.prepare(
        "SELECT destination_id, photo_index, id, file_name, content_type FROM destination_memory_images ORDER BY destination_id, photo_index",
      ).all(),
      env.DB.prepare("SELECT value FROM app_meta WHERE key = 'local_data_imported'").first(),
    ]);

    return json({
      visitedIds: state ? JSON.parse(state.visited_place_ids) : [],
      expenses: expenses.results || [],
      photos: (photos.results || []).map((photo) => ({
        destination_id: photo.destination_id,
        photo_index: photo.photo_index,
        path: photo.id,
        name: photo.file_name,
        type: photo.content_type,
        url: `/api/memories/file?id=${encodeURIComponent(photo.id)}`,
      })),
      initialized: imported && imported.value === "1",
    });
  } catch (error) {
    return errorResponse(error);
  }
}
