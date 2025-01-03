import NextAuth, { type NextAuthConfig } from "next-auth";

import authConfig from "~/auth.config";

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth(
  authConfig as NextAuthConfig,
);
