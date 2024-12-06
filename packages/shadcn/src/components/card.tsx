import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

const Card = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      className,
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: ComponentPropsWithRef<"h3">) => (
  <h3
    className={cn(
      "font-semibold text-2xl leading-none tracking-tight",
      className,
    )}
    {...props}
  />
);

const CardDescription = ({
  className,
  ...props
}: ComponentPropsWithRef<"p">) => (
  <p
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("p-6 pt-0", className)}
    {...props}
  />
);

const CardFooter = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
