"use client";

import { Content, Provider, Root, Trigger } from "@radix-ui/react-tooltip";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const TooltipProvider = Provider;

const Tooltip = Root;

const TooltipTrigger = Trigger;

const TooltipContent = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithRef<typeof Content>) => (
  <Content
    className={cn(
      "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm shadow-md data-[state=closed]:animate-out",
      className,
    )}
    sideOffset={sideOffset}
    {...props}
  />
);

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
