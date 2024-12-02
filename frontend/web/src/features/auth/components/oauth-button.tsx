import { Button, type ButtonProps } from "@packages/shadcn/components/button";

import { cn } from "@/lib/utils";

type OAuthButtonProps = ButtonProps;
export function OAuthButton({
  className,
  children,
  ...props
}: OAuthButtonProps) {
  return (
    <Button
      className={cn(
        "group relative w-full",
        "[&_svg]:absolute [&_svg]:left-4 [&_svg]:size-5 [&_svg]:text-muted-foreground hover:[&_svg]:text-current group-hover:[&_svg]:text-foreground dark:[&_svg]:fill-current dark:[&_svg]:stroke-none",
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
