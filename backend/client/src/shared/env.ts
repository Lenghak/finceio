import { object } from "valibot";

const envSchema = object({});

export const env = envSchema["~validate"]({
  value: {},
});
