import {
  errorResponse,
  HttpError,
  json,
  readJson,
  requireOwner,
  validateExpense,
} from "../_lib/http.js";

export async function onRequestPost(context) {
  try {
    requireOwner(context);
    const expense = validateExpense(await readJson(context.request));
    const result = await context.env.DB.prepare(
      "INSERT OR IGNORE INTO expenses (id, amount, category, timestamp) VALUES (?, ?, ?, ?)",
    ).bind(expense.id, expense.amount, expense.category, expense.timestamp).run();
    if (result.meta.changes === 0) throw new HttpError(409, "Khoản chi này đã được lưu.");
    return json(expense, 201);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function onRequestDelete(context) {
  try {
    requireOwner(context);
    const id = new URL(context.request.url).searchParams.get("id");
    if (!id) throw new HttpError(400, "Thiếu mã khoản chi cần xóa.");
    await context.env.DB.prepare("DELETE FROM expenses WHERE id = ?").bind(id).run();
    return json({ deleted: true });
  } catch (error) {
    return errorResponse(error);
  }
}
