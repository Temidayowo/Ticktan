import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// Provider-less config so Prisma/bcrypt never get bundled into the proxy —
// only the JWT cookie is read here (see authConfig.callbacks.authorized).
export const { auth } = NextAuth(authConfig);
