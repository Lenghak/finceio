import tailwindConfig from "@packages/tailwindcss";
import type { Config } from "tailwindcss/types";

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,
} satisfies Config;
