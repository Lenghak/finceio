import { Root as SeparatorPrimitiveRoot } from "@radix-ui/react-separator";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof SeparatorPrimitiveRoot>) => (
  <SeparatorPrimitiveRoot
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitiveRoot.displayName;

export { Separator };
