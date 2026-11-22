import {
  errorResponse,
  json,
  readJson,
  requireOwner,
  validateVisitedIds,
} from "../_lib/http.js";

export async function onRequestPut(context) {
  try {
    requireOwner(context);
    const body = await readJson(context.request);
    const visitedIds = validateVisitedIds(body.visitedIds);
    await context.env.DB.prepare(
      "INSERT INTO trip_state (id, visited_place_ids, updated_at) VALUES ('main', ?, datetime('now')) ON CONFLICT(id) DO UPDATE SET visited_place_ids = excluded.visited_place_ids, updated_at = excluded.updated_at",
    ).bind(JSON.stringify(visitedIds)).run();
    return json({ visitedIds });
  } catch (error) {
    return errorResponse(error);
  }
}
