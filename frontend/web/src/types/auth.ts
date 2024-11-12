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

export const MagicLinkSignInRequestSchema = object({
  provider: MagicLinkProvidersSchema,
  email: pipe(string(), email("Please input a valid email address")),
});

export const SocialSignInRequestSchema = object({
  provider: OAuthProvidersSchema,
  email: undefinedable(string()),
});

export const OAuthSignInRequestSchema = variant("provider", [
  SocialSignInRequestSchema,
  MagicLinkSignInRequestSchema,
]);

export type MagicLinkSignInRequest = InferInput<
  typeof MagicLinkSignInRequestSchema
>;
export type SocialSignInRequest = InferInput<typeof SocialSignInRequestSchema>;
export type OAuthSignInRequest = InferInput<typeof OAuthSignInRequestSchema>;
