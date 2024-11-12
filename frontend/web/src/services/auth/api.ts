import { signIn } from "@/actions/auth";
import type { OAuthSignInRequest } from "@/types/auth";

export const postSignIn = (req: OAuthSignInRequest) => {
  return signIn(req);
};
