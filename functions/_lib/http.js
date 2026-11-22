export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export function errorResponse(error) {
  console.error("Trip API request failed.", error);
  const status = error instanceof HttpError ? error.status : 500;
  const message = error instanceof HttpError ? error.message : "Không thể hoàn tất yêu cầu.";
  return json({ error: message }, status);
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    throw new HttpError(400, "Dữ liệu gửi lên không hợp lệ.");
  }
}

export function requireOwner(context) {
  if (!context.data.isOwner) throw new HttpError(401, "Vui lòng đăng nhập bằng tài khoản chủ sở hữu.");
}

export function validateVisitedIds(value) {
  const destinationIds = [
    "long-hai",
    "ke-ga",
    "bau-trang",
    "vinh-hy",
    "cam-ranh",
    "bai-dai",
    "deo-cu-hin",
    "luong-son",
    "deo-co-ma",
    "mui-dien",
    "ganh-da-dia",
    "song-cau",
    "go-quy-nhon",
    "bong-son",
  ];
  if (!Array.isArray(value) || value.length > destinationIds.length) {
    throw new HttpError(400, "Danh sách điểm đã ghé không hợp lệ.");
  }
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] !== destinationIds[index]) {
      throw new HttpError(400, "Các điểm phải được đánh dấu theo đúng thứ tự hành trình.");
    }
  }
  return value;
}

export function validateExpense(expense) {
  const categories = new Set(["food", "vehicle", "fine", "other"]);
  if (!expense || typeof expense.id !== "string" || !expense.id.trim() || expense.id.length > 100) {
    throw new HttpError(400, "Mã khoản chi không hợp lệ.");
  }
  if (!Number.isSafeInteger(expense.amount) || expense.amount <= 0) {
    throw new HttpError(400, "Số tiền phải là số nguyên dương.");
  }
  if (!categories.has(expense.category)) {
    throw new HttpError(400, "Danh mục khoản chi không hợp lệ.");
  }
  if (typeof expense.timestamp !== "string" || Number.isNaN(Date.parse(expense.timestamp))) {
    throw new HttpError(400, "Thời gian khoản chi không hợp lệ.");
  }
  return {
    id: expense.id,
    amount: expense.amount,
    category: expense.category,
    timestamp: new Date(expense.timestamp).toISOString(),
  };
}

export function validateDestinationId(destinationId) {
  const allowed = new Set([
    "long-hai",
    "ke-ga",
    "bau-trang",
    "vinh-hy",
    "cam-ranh",
    "bai-dai",
    "deo-cu-hin",
    "luong-son",
    "deo-co-ma",
    "mui-dien",
    "ganh-da-dia",
    "song-cau",
    "go-quy-nhon",
    "bong-son",
  ]);
  if (!allowed.has(destinationId)) throw new HttpError(400, "Điểm đến không hợp lệ.");
  return destinationId;
}

export function validatePhotoIndex(value) {
  const index = Number(value);
  if (!Number.isInteger(index) || index < 0 || index > 2) {
    throw new HttpError(400, "Vị trí ảnh không hợp lệ.");
  }
  return index;
}
