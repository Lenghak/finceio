"use server";

import { auth, unstable_update } from "@/auth";
import { env } from "@/env";
import ky from "ky";

export const http = ky.create({
  retry: 0,
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const session = await auth();
        if (session?.user.at) {
          request.headers.set("Authorization", `Bearer ${session.user.at}`);
        }
      },
    ],
    afterResponse: [
      async (request, _option, response) => {
        if (response.status === 401) {
          const session = await unstable_update({});

          request.headers.set("Authorization", `Bearer ${session?.user.at}`);
          return ky(request);
        }

        return response;
      },
    ],
  },
});
