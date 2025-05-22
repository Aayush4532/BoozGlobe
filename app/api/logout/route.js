import { cookies } from "next/headers";
export async function POST() {
  cookies().set("session", "", {
    maxAge: 0,
    path: "/",
  });

  return new Response(JSON.stringify({ status: "logged out" }), { status: 200 });
}