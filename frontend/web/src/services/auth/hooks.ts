import { signIn } from "@/actions/auth";
import { authKeys } from "@/services/auth/keys";
import type { OAuthSignInRequest } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () =>
  useMutation({
    mutationKey: authKeys.operation("sign-in"),
    mutationFn: async (req: OAuthSignInRequest) => await signIn(req),
  });
