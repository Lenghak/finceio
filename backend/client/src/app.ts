import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";

import "@/core/env.config";

const app = new Hono();

app.use(cors());
app.use(csrf());
app.use(logger());
app.use(secureHeaders());
app.use(trimTrailingSlash());
app.use(prettyJSON());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  port: 8000,
  fetch: app.fetch,
};
