"use client";

import { Indicator, Root } from "@radix-ui/react-progress";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const Progress = ({
  className,
  value,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Root>) => (
  <Root
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className,
    )}
    ref={ref}
    {...props}
  >
    <Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
);

export { Progress };
