import { authHandler, initAuthConfig } from "@hono/auth-js";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { handle } from "hono/vercel";

import authConfig from "~/auth.config";

const app = new Hono();

app.use(
  "*",
  initAuthConfig((c) => ({
    secret: env(c).AUTH_SECRET,
    ...authConfig,
  })),
);

app.use("/api/auth/*", authHandler());

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
