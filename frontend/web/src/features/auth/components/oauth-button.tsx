import { Button, type ButtonProps } from "@packages/shadcn/components/button";

import { cn } from "@/lib/utils";

import type { Icon } from "@tabler/icons-react";

type OAuthButtonProps = {
  icon: Icon;
} & ButtonProps;
export function OAuthButton({
  className,

  children,
  ...props
}: OAuthButtonProps) {
  return (
    <Button
      className={cn("relative w-full rounded-full", className)}
      color="secondary"
      size="lg"
      variant="outline"
      {...props}
      icon={undefined}
    >
      <props.icon className="absolute left-6 size-5 dark:fill-current dark:stroke-0" />
      {children}
    </Button>
  );
}
