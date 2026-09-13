import type { NextAuthConfig } from "next-auth";

// Split config: this file has no Prisma/bcrypt imports so it stays cheap to
// evaluate in proxy.ts, which only needs the optimistic `authorized` check.
export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin =
        request.nextUrl.pathname.startsWith("/admin") &&
        request.nextUrl.pathname !== "/admin/login";

      if (isOnAdmin) return isLoggedIn;

      if (isLoggedIn && request.nextUrl.pathname === "/admin/login") {
        return Response.redirect(new URL("/admin", request.nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
