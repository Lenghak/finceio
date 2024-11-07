import { createEnvSchema, validateEnv } from "@enalmada/env-valibot";

const envSchema = createEnvSchema({});

export const env = validateEnv(envSchema, {})?.output;
