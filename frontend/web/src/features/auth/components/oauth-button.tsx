import { Button, type ButtonProps } from "@packages/shadcn/components/button";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type OAuthButtonProps = {
  icon: ReactNode;
} & ButtonProps;
export function OAuthButton({
  className,
  children,
  ...props
}: OAuthButtonProps) {
  return (
    <Button
      className={cn(
        "group relative w-full rounded-full bg-background",
        "[&_svg]:absolute [&_svg]:left-4 [&_svg]:size-5 [&_svg]:text-muted-foreground [&_svg]:group-hover:text-foreground [&_svg]:dark:fill-current [&_svg]:dark:stroke-none",
        className,
      )}
      color="secondary"
      variant="outline"
      {...props}
    >
      {children}
    </Button>
  );
}
