const cookieName = "trip_owner_session";
const encoder = new TextEncoder();

function base64UrlEncode(value) {
  const bytes = typeof value === "string" ? encoder.encode(value) : value;
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecode(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function getSigningKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createSession(secret) {
  const payload = base64UrlEncode(JSON.stringify({
    sub: "owner",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  }));
  const key = await getSigningKey(secret);
  const signature = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  const token = `${payload}.${base64UrlEncode(signature)}`;
  return `${cookieName}=${token}; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`;
}

export function clearSession() {
  return `${cookieName}=; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export async function verifySession(request, secret) {
  if (!secret) return false;
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookie = cookieHeader.split(";").map((part) => part.trim())
    .find((part) => part.startsWith(`${cookieName}=`));
  if (!cookie) return false;

  const token = cookie.slice(cookieName.length + 1);
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return false;

  try {
    const key = await getSigningKey(secret);
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      base64UrlDecode(signature),
      encoder.encode(payload),
    );
    if (!valid) return false;
    const session = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload)));
    return session.sub === "owner" && Number.isInteger(session.exp) && session.exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

export async function safeEqual(first, second) {
  const [firstHash, secondHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(first)),
    crypto.subtle.digest("SHA-256", encoder.encode(second)),
  ]);
  const a = new Uint8Array(firstHash);
  const b = new Uint8Array(secondHash);
  let difference = 0;
  for (let index = 0; index < a.length; index += 1) difference |= a[index] ^ b[index];
  return difference === 0;
}

export function isSameOrigin(request) {
  const origin = request.headers.get("Origin");
  return !origin || origin === new URL(request.url).origin;
}
