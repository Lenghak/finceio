import shadcn from "@packages/shadcn/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...shadcn,
  content: [
    "app/**/*.{ts,tsx}",
    "**/node_modules/@packages/shadcn/src/**/*.{ts,tsx}",
  ],
};
export default config;
