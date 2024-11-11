import v from "valibot";

export const tokensSchema = v.object({
  accessToken: v.string(),
  refreshToken: v.string(),
});
export type Tokens = v.InferInput<typeof tokensSchema>;
