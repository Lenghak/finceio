import shadcnConfig from "@packages/shadcn/tailwind.config";
import type { Config } from "tailwindcss/types";

/** @type {import('tailwindcss').Config} */
export default {
  ...shadcnConfig,
  content: ["**/node_modules/@packages/shadcn/src/**/*.{ts,tsx}"],
} satisfies Config;
