// /app/api/sessionLogin/route.js
import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, applicationDefault } from "firebase-admin/app";

try {
  const app = initializeApp({ credential: applicationDefault() });
} catch (error) {
  console.error("Firebase Admin SDK Initialization Error:", error);
}

export async function POST(req) {
  const body = await req.json();
  const { idToken } = body;

  const expiresIn = 60 * 60 * 1000; // 1 hour

  try {
    const sessionCookie = await getAuth(app).createSessionCookie(idToken, { expiresIn });

    const cookieStore = cookies();
    cookieStore.set("session", sessionCookie, {
      httpOnly: true,
      maxAge: expiresIn / 1000,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (err) {
    console.error("Error creating session cookie:", err);
    return new Response(JSON.stringify({ error: "Unauthorized", details: err.message }), { status: 401 });
  }
}