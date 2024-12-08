import Million from "@million/lint";
import type { NextConfig } from "next";
import "@/env";

const nextConfig: NextConfig = {
  /* config options here */
};

export default Million.next({
  turbo: false,
})(nextConfig);
