import { clearSession, isSameOrigin } from "../../_lib/auth.js";
import { errorResponse, HttpError, json } from "../../_lib/http.js";

export async function onRequestPost(context) {
  try {
    if (!isSameOrigin(context.request)) throw new HttpError(403, "Yêu cầu không hợp lệ.");
    return json({ isOwner: false }, 200, { "Set-Cookie": clearSession() });
  } catch (error) {
    return errorResponse(error);
  }
}
