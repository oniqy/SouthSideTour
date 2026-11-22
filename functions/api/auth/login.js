import { createSession, isSameOrigin, safeEqual } from "../../_lib/auth.js";
import { errorResponse, HttpError, json, readJson } from "../../_lib/http.js";

export async function onRequestPost(context) {
  try {
    if (!isSameOrigin(context.request)) throw new HttpError(403, "Yêu cầu không hợp lệ.");
    const { email, password } = await readJson(context.request);
    if (!context.env.OWNER_EMAIL || !context.env.OWNER_PASSWORD || !context.env.SESSION_SECRET) {
      throw new HttpError(503, "Chủ sở hữu chưa cấu hình thông tin đăng nhập trên Cloudflare.");
    }
    const emailMatches = await safeEqual(
      String(email || "").trim().toLowerCase(),
      context.env.OWNER_EMAIL.trim().toLowerCase(),
    );
    const passwordMatches = await safeEqual(
      String(password || ""),
      context.env.OWNER_PASSWORD,
    );
    if (!emailMatches || !passwordMatches) {
      throw new HttpError(401, "Email hoặc mật khẩu không chính xác.");
    }

    return json(
      { isOwner: true },
      200,
      { "Set-Cookie": await createSession(context.env.SESSION_SECRET) },
    );
  } catch (error) {
    return errorResponse(error);
  }
}
