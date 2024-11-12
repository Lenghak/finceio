import { type InferInput, object, string } from "valibot";

export const tokensSchema = object({
  accessToken: string(),
  refreshToken: string(),
});
export type Tokens = InferInput<typeof tokensSchema>;
