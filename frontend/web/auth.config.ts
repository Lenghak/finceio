import type { OAuthSignInRequest } from "@/types/auth";
import type { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      authorize: (credentials, _req) => {
        const { provider: _provider, email: _email } =
          credentials as OAuthSignInRequest;

        // Magic Link Sign In

        // OAuth Sign In

        return null;
      },
    }),
  ],
  callbacks: {},
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
