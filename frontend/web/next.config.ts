import type { NextConfig } from "next";

import { clientEnv, serverEnv } from "@/env";

const nextConfig: NextConfig = {
  /* config options here */
};

export default clientEnv?.success && serverEnv?.success
  ? nextConfig
  : undefined;
