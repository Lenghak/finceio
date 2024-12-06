import { type VariantProps, cva } from "class-variance-authority";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const labelVariants = cva(
  "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

import { Root as LabelPrimitiveRoot } from "@radix-ui/react-label";

const Label = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof LabelPrimitiveRoot> &
  VariantProps<typeof labelVariants>) => (
  <LabelPrimitiveRoot
    className={cn(labelVariants(), className)}
    ref={ref}
    {...props}
  />
);
export { Label };
