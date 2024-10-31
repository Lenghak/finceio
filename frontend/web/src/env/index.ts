import { env as clientEnv } from "./client.ts";
import { env as serverEnv } from "./server.ts";

export const env = { ...clientEnv, ...serverEnv };
