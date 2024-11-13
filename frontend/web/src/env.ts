import { isServer } from "@tanstack/react-query";
import { url, type InferInput, object, pipe, string } from "valibot";

const serverSchema = object({
  AUTH_URL: pipe(string(), url("AUTH_SECRET")),
  AUTH_SECRET: string("AUTH_SECRET"),
});

const clientSchema = object({
  NEXT_PUBLIC_ORIGIN_URL: pipe(string(), url("NEXT_PUBLIC_ORIGIN_URL")),
  NEXT_PUBLIC_API_URL: pipe(string(), url("NEXT_PUBLIC_API_URL")),
});

const serverEnv = (
  isServer
    ? serverSchema["~validate"]({
        value: {
          AUTH_URL: process.env.AUTH_URL,
          AUTH_SECRET: process.env.AUTH_SECRET,
        },
      }).value
    : {}
) as InferInput<typeof serverSchema>;

const clientEnv = clientSchema["~validate"]({
  value: {
    NEXT_PUBLIC_ORIGIN_URL: process.env.NEXT_PUBLIC_ORIGIN_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}).value as InferInput<typeof clientSchema>;

export const env = {
  ...clientEnv,
  ...serverEnv,
};
