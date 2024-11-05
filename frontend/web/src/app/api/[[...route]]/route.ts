import authConfig from "~/auth.config";

import { authHandler, initAuthConfig } from "@hono/auth-js";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";
import { handle } from "hono/vercel";

const app = new Hono();

app.use(cors());
app.use(compress());
app.use(csrf());
app.use(secureHeaders());
app.use(trimTrailingSlash());
app.use(prettyJSON());
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
