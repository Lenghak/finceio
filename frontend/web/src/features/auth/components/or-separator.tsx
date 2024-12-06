import { cn } from "@/lib/utils";
import { Separator } from "@packages/shadcn/components/separator";
import { TypographyMuted } from "@packages/shadcn/components/typography";
import type { ComponentPropsWithoutRef } from "react";

export function OrSeparator({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"div">, "children">) {
  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_auto_1fr] grid-rows-1 place-items-center justify-center gap-4 overflow-hidden text-center",
        className,
      )}
      {...props}
    >
      <Separator />
      <TypographyMuted>Or</TypographyMuted>
      <Separator />
    </div>
  );
}
