import MillionLint from "@million/lint";
import type { NextConfig } from "next";

import "@/env";

const nextConfig: NextConfig = {
  /* config options here */
};

export default process.env.NODE_ENV === "development"
  ? MillionLint.next({
      enabled: true,
      rsc: true,
      turbo: false,
    })({
      ...nextConfig,
    })
  : nextConfig;
