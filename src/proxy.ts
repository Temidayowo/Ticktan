export { auth as proxy } from "@/lib/proxy-auth";

// Skip proxy on static assets and the image optimizer; run it everywhere
// else so the admin area gets the optimistic auth redirect.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
