import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";
import type React from "react";

interface ContainerProps extends ComponentPropsWithRef<"div"> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  children: React.ReactNode;
}

export function Container({
  maxWidth = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4",
        {
          "max-w-(--breakpoint-xs)": maxWidth === "xs",
          "max-w-(--breakpoint-sm)": maxWidth === "sm",
          "max-w-(--breakpoint-md)": maxWidth === "md",
          "max-w-(--breakpoint-lg)": maxWidth === "lg",
          "max-w-(--breakpoint-xl)": maxWidth === "xl",
          "max-w-(--breakpoint-2xl)": maxWidth === "2xl",
          "max-w-(--breakpoint-3xl)": maxWidth === "3xl",
          "max-w-full": maxWidth === "full",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
