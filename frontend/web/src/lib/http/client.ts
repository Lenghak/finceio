import { env } from "@/env";
import ky from "ky";

export const http = {
  origin: ky.create({
    retry: 0,
    prefixUrl: env.NEXT_PUBLIC_ORIGIN_URL,
  }),
  api: ky.create({
    retry: 0,
    prefixUrl: env.NEXT_PUBLIC_API_URL,
  }),
};
