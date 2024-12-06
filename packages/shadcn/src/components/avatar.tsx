"use client";

import { Fallback, Image, Root } from "@radix-ui/react-avatar";

import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

const Avatar = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Root>) => (
  <Root
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const AvatarImage = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Image>) => (
  <Image
    className={cn("aspect-square h-full w-full", className)}
    ref={ref}
    {...props}
  />
);

const AvatarFallback = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Fallback>) => (
  <Fallback
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    ref={ref}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };
