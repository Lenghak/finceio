"use client";

import { cn } from "@packages/shadcn/lib/utils";
import {
  Corner,
  Root,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  Viewport,
} from "@radix-ui/react-scroll-area";
import type { ComponentPropsWithRef } from "react";

const ScrollArea = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<typeof Root>) => (
  <Root
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <Viewport className="h-full w-full rounded-[inherit]">{children}</Viewport>
    <Corner />
  </Root>
);

const ScrollBar = ({
  className,
  orientation = "vertical",
  ...props
}: ComponentPropsWithRef<typeof ScrollAreaScrollbar>) => (
  <ScrollAreaScrollbar
    className={cn(
      "flex touch-none select-none border-l border-l-transparent p-0.5",
      orientation === "vertical" &&
        "h-full w-2.5 border-t border-t-transparent",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-l border-l-transparent",
      className,
    )}
    orientation={orientation}
    {...props}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
);

export { ScrollArea, ScrollBar };
