import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

function Skeleton({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
