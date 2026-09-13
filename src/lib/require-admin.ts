import "server-only";
import { auth } from "@/lib/auth";

/**
 * Every Server Action is a public POST endpoint regardless of whether the
 * page that calls it is behind proxy.ts, so each mutation re-checks the
 * session here rather than trusting the caller's UI state.
 */
export async function requireAdminSession() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
}
