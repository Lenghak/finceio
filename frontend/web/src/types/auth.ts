import {
  type InferInput,
  email,
  object,
  picklist,
  pipe,
  string,
  undefinedable,
  union,
  variant,
} from "valibot";

export const OAuthProvidersSchema = picklist([
  "google",
  "facebook",
  "apple",
  "twitter",
  "github",
  "microsoft",
]);
export const MagicLinkProvidersSchema = picklist(["resend"]);
export const AuthProvidersSchema = union([
  OAuthProvidersSchema,
  MagicLinkProvidersSchema,
]);

export type OAuthProvider = InferInput<typeof OAuthProvidersSchema>;
export type MagicLinkProvider = InferInput<typeof MagicLinkProvidersSchema>;
export type AuthProvider = InferInput<typeof AuthProvidersSchema>;

export const OAuthSignInRequestSchema = variant("provider", [
  object({
    provider: OAuthProvidersSchema,
    email: undefinedable(string()),
  }),
  object({
    provider: MagicLinkProvidersSchema,
    email: pipe(string(), email()),
  }),
]);

export type OAuthSignInRequest = InferInput<typeof OAuthSignInRequestSchema>;
