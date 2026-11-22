import {
  errorResponse,
  HttpError,
  json,
  readJson,
  requireOwner,
  validateExpense,
  validateVisitedIds,
} from "../_lib/http.js";

export async function onRequestPost(context) {
  try {
    requireOwner(context);
    const imported = await context.env.DB.prepare(
      "SELECT value FROM app_meta WHERE key = 'local_data_imported'",
    ).first();
    if (imported && imported.value === "1") {
      throw new HttpError(409, "Dữ liệu đã được khởi tạo và không thể nhập lại.");
    }

    const body = await readJson(context.request);
    const visitedIds = validateVisitedIds(body.visitedIds);
    if (!Array.isArray(body.expenses)) throw new HttpError(400, "Danh sách khoản chi không hợp lệ.");
    const expenses = body.expenses.map(validateExpense);
    const statements = [
      context.env.DB.prepare(
        "INSERT INTO trip_state (id, visited_place_ids, updated_at) VALUES ('main', ?, datetime('now')) ON CONFLICT(id) DO UPDATE SET visited_place_ids = excluded.visited_place_ids, updated_at = excluded.updated_at",
      ).bind(JSON.stringify(visitedIds)),
      ...expenses.map((expense) => context.env.DB.prepare(
        "INSERT OR IGNORE INTO expenses (id, amount, category, timestamp) VALUES (?, ?, ?, ?)",
      ).bind(expense.id, expense.amount, expense.category, expense.timestamp)),
    ];
    await context.env.DB.batch(statements);
    return json({ imported: true });
  } catch (error) {
    return errorResponse(error);
  }
}
