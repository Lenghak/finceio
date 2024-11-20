import { next } from "@million/lint";
import type { NextConfig } from "next";
import "@/env";

const nextConfig: NextConfig = {
  /* config options here */
};

export default process.env.NODE_ENV === "development"
  ? next({
      enabled: true,
      rsc: true,
      turbo: false,
      optimizeDOM: true,
    })({
      ...nextConfig,
    })
  : nextConfig;
