import { env } from "@/env";
import ky from "ky";

export const http = ky.create({
  retry: 0,
  prefixUrl: env.NEXT_PUBLIC_API_URL,
});
