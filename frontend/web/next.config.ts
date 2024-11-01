import MillionLint from "@million/lint";
import type { NextConfig } from "next";

import { clientEnv, serverEnv } from "@/env";

const nextConfig: NextConfig = {
  /* config options here */
};

export default (() => {
  if (clientEnv?.success && serverEnv?.success) {
    return process.env.NODE_ENV === "development"
      ? MillionLint.next({ enabled: true, rsc: true })(nextConfig)
      : nextConfig;
  }
})();
