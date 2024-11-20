import Credentials from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        provider: {},
      },
      authorize: (_credentials) => {
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token }) => {
      return token;
    },

    session: ({ session }) => {
      return session;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/sign-in",
    error: undefined,
    newUser: "/onboarding",
    verifyRequest: "/verify-email",
    signOut: "/",
  },
  trustHost: true,
  debug: process.env.NODE_ENV === "development",
} as AuthConfig;
