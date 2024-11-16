"use client";

import { SessionProvider as NextAuthSessionProvider } from "@hono/auth-js/react";
import { useMemo } from "react";
import type { PropsWithChildren } from "react";

export function SessionProvider({ children }: PropsWithChildren) {
  return useMemo(
    () => <NextAuthSessionProvider>{children}</NextAuthSessionProvider>,
    [children],
  );
}
