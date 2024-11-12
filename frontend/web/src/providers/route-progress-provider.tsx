"use client";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import type { PropsWithChildren } from "react";
import { useIsMounted } from "usehooks-ts";

export function RouteProgressProvider({ children }: PropsWithChildren) {
  const isMounted = useIsMounted();

  return (
    <>
      {children}
      {isMounted() && (
        <ProgressBar
          color="red"
          height="10rem"
          options={{ showSpinner: false }}
          shallowRouting={true}
        />
      )}
    </>
  );
}
