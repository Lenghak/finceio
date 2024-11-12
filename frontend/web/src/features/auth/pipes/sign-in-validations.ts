import {
  MagicLinkSignInRequestSchema,
  SocialSignInRequestSchema,
} from "@/types/auth";
import { valibotResolver } from "@hookform/resolvers/valibot";
import type { InferInput } from "valibot";

export const MagicLinkSignInPipeSchema = MagicLinkSignInRequestSchema;
export const SocialSignInPipeSchema = SocialSignInRequestSchema;

export const MagicLinkSignInResovler = valibotResolver(
  MagicLinkSignInPipeSchema,
);
export const SocialSignInResolver = valibotResolver(SocialSignInPipeSchema);

export type MagicLinkSignInPipe = InferInput<typeof MagicLinkSignInPipeSchema>;
export type SocialSignInPipe = InferInput<typeof SocialSignInPipeSchema>;
