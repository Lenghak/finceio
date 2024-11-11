import { OAuthSignInRequestSchema } from "@/types/auth";
import { valibotResolver } from "@hookform/resolvers/valibot";

import type v from "valibot";

export const OAuthSignInPipeSchema = OAuthSignInRequestSchema;

export const OAuthSignInResolver = valibotResolver(OAuthSignInPipeSchema);

export type OAuthSignInPipe = v.InferInput<typeof OAuthSignInPipeSchema>;
