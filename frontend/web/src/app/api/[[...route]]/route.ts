import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js"
import { Hono } from "hono"
import { env } from "hono/adapter"
import { handle } from "hono/vercel"

const app = new Hono()

app.use(
  "*",
  initAuthConfig((c) => ({
    secret: env(c).AUTH_SECRET,
    providers: [],
    session: {
      strategy: "jwt",
    },
  })),
)

app.use("/api/auth/*", authHandler())

app.use("/api/*", verifyAuth())

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
