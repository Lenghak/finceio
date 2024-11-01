import { cn } from "@packages/shadcn/lib/utils";
import type React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export function Box({
  as: Component = "div",
  className,
  children,
  ...props
}: BoxProps) {
  return (
    <Component
      className={cn("", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
