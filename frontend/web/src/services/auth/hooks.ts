import { authKeys } from "@/services/auth/keys";
import type { OAuthSignInRequest } from "@/types/auth";
import { signIn } from "@hono/auth-js/react";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () =>
  useMutation({
    mutationKey: authKeys.operation("sign-in"),
    mutationFn: async (req: OAuthSignInRequest) =>
      await signIn("credentials", req),
  });
