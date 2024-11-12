import { signIn } from "@/services/auth/actions";
import type { OAuthSignInRequest } from "@/types/auth";

export const postSignIn = async (req: OAuthSignInRequest) => {
  return await signIn(req);
};
