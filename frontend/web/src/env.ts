import { createEnvSchema, required, validateEnv } from "@enalmada/env-valibot";
import { isServer } from "@tanstack/react-query";

const serverSchema = createEnvSchema({
  AUTH_URL: required("AUTH_URL"),
  AUTH_SECRET: required("AUTH_SECRET"),
});

const clientSchema = createEnvSchema({
  NEXT_PUBLIC_ORIGIN_URL: required("NEXT_PUBLIC_ORIGIN_URL"),
  NEXT_PUBLIC_API_URL: required("NEXT_PUBLIC_API_URL"),
});

const serverEnv = isServer
  ? validateEnv(
      serverSchema,
      {
        AUTH_URL: process.env.AUTH_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
      },
      process.env.SKIP_ENV_VALIDATION,
    )?.output
  : {};

const clientEnv = validateEnv(
  clientSchema,
  {
    NEXT_PUBLIC_ORIGIN_URL: process.env.NEXT_PUBLIC_ORIGIN_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  process.env.SKIP_ENV_VALIDATION,
)?.output;

export const env = {
  ...clientEnv,
  ...serverEnv,
};
