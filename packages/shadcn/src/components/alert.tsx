import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = ({
  className,
  variant,
  ref,
  ...props
}: ComponentPropsWithRef<"div"> & VariantProps<typeof alertVariants>) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    ref={ref}
    role="alert"
    {...props}
  />
);

const AlertTitle = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"h5">) => (
  <h5
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    ref={ref}
    {...props}
  />
);

const AlertDescription = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    ref={ref}
    {...props}
  />
);

export { Alert, AlertTitle, AlertDescription };
