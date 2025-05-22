// /app/dashboard/page.jsx
import { cookies } from "next/headers";
import { getAuth } from "@/lib/firebaseAdmin";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) {
    redirect("/account");
  }

  try {
    const decoded = await getAuth().verifySessionCookie(sessionCookie, true);
    return <div>Welcome, {decoded.email}</div>;
  } catch (err) {
    redirect("/account");
  }
}