import { errorResponse, json, requireOwner } from "../../_lib/http.js";

export async function onRequestPost(context) {
  try {
    requireOwner(context);
    await context.env.DB.prepare(
      "UPDATE app_meta SET value = '1' WHERE key = 'local_data_imported'",
    ).run();
    return json({ initialized: true });
  } catch (error) {
    return errorResponse(error);
  }
}
