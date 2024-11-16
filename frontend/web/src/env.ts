import { url, object, parse, pipe, string } from "valibot";

const serverSchema = object({
  AUTH_URL: pipe(string("AUTH_SECRET"), url("AUTH_SECRET")),
  AUTH_SECRET: string("AUTH_SECRET"),
});

const clientSchema = object({
  NEXT_PUBLIC_ORIGIN_URL: pipe(
    string("NEXT_PUBLIC_ORIGIN_URL"),
    url("NEXT_PUBLIC_ORIGIN_URL"),
  ),
  NEXT_PUBLIC_API_URL: pipe(
    string("NEXT_PUBLIC_ORIGIN_URL"),
    url("NEXT_PUBLIC_API_URL"),
  ),
});

const serverEnv =
  typeof window === "undefined"
    ? parse(serverSchema, {
        AUTH_URL: process.env.AUTH_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
      })
    : (() => {
        process.env.AUTH_URL = undefined;
        process.env.AUTH_SECRET = undefined;
        return process.env;
      })();

const clientEnv = parse(clientSchema, {
  NEXT_PUBLIC_ORIGIN_URL: process.env.NEXT_PUBLIC_ORIGIN_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

export const env = {
  ...clientEnv,
  ...serverEnv,
};
