import { email, number, object, parse, pipe, string, transform } from "valibot";

const envSchema = object({
  APP_SERVER_PORT: pipe(
    string("APP_SERVER_PORT"),
    transform((v) => number(v)),
  ),

  EMAIL_SERVER_USER: string("EMAIL_SERVER_USER"),
  EMAIL_SERVER_PASSWORD: string("EMAIL_SERVER_PASSWORD"),
  EMAIL_SERVER_HOST: string("EMAIL_SERVER_HOST"),
  EMAIL_SERVER_PORT: pipe(
    string("EMAIL_SERVER_PORT"),
    transform((v) => number(v)),
  ),
  EMAIL_FROM: pipe(string("EMAIL_FROM"), email("EMAIL_FROM")),
});

export const env = parse(envSchema, {});
