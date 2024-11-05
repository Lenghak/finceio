import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      authorize: (credentials, _req) => {
        const { provider: _provider, email: _email } = credentials as {
          provider: Provider;
          email: string | undefined | null;
        };

        // Magic Link Sign In

        // OAuth Sign In

        return null;
      },
    }),
  ],
  callbacks: {},
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
