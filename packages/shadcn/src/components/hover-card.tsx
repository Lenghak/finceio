"use client";

import { Content, Root, Trigger } from "@radix-ui/react-hover-card";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const HoverCard = Root;

const HoverCardTrigger = Trigger;

const HoverCardContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Content>) => (
  <Content
    align={align}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
);

export { HoverCard, HoverCardTrigger, HoverCardContent };
