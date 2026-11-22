import { verifySession } from "../_lib/auth.js";

export async function onRequest(context) {
  context.data.isOwner = await verifySession(
    context.request,
    context.env.SESSION_SECRET,
  );
  return context.next();
}
