import Million from "@million/lint";
import type { NextConfig } from "next";
import "@/env";

const nextConfig: NextConfig = {
  /* config options here */
};

export default process.env.NODE_ENV === "development"
  ? Million.next({
      turbo: false,
    })(nextConfig)
  : nextConfig;
