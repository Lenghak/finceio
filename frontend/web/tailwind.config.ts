import shadcn from "@packages/shadcn/tailwind.config"
import type { Config } from "tailwindcss"

const config: Config = {
  ...shadcn,
  content: ["app/**/*.{ts,tsx}", "**/@packages/shadcn/**/*.{ts,tsx}"],
}
export default config
