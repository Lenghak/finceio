import { createEnvSchema, required, validateEnv } from "@enalmada/env-valibot";
import { isServer } from "@tanstack/react-query";
import { type InferInput, object } from "valibot";

const serverSchema = object({
  AUTH_URL: required("AUTH_URL"),
  AUTH_SECRET: required("AUTH_SECRET"),
});

const clientSchema = object({
  NEXT_PUBLIC_ORIGIN_URL: required("NEXT_PUBLIC_ORIGIN_URL"),
  NEXT_PUBLIC_API_URL: required("NEXT_PUBLIC_API_URL"),
});

const serverEnv = isServer
  ? validateEnv(
      createEnvSchema(serverSchema.entries),
      {
        AUTH_URL: process.env.AUTH_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
      },
      process.env.SKIP_ENV_VALIDATION,
    )?.output
  : {};

const clientEnv = validateEnv(
  createEnvSchema(clientSchema.entries),
  {
    NEXT_PUBLIC_ORIGIN_URL: process.env.NEXT_PUBLIC_ORIGIN_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  process.env.SKIP_ENV_VALIDATION,
)?.output as InferInput<typeof clientSchema>;

export const env = {
  ...clientEnv,
  ...serverEnv,
} as InferInput<typeof serverSchema> & InferInput<typeof clientSchema>;
