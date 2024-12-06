import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type React from "react";
import type { ComponentPropsWithRef } from "react";

import { cn } from "@packages/shadcn/lib/utils";

const Breadcrumb = ({
  ref,
  separator,
  ...props
}: ComponentPropsWithRef<"nav"> & {
  separator?: React.ReactNode;
}) => (
  <nav
    aria-label="breadcrumb"
    ref={ref}
    {...props}
  />
);

const BreadcrumbList = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"ol">) => (
  <ol
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const BreadcrumbItem = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"li">) => (
  <li
    className={cn("inline-flex items-center gap-1.5", className)}
    ref={ref}
    {...props}
  />
);

const BreadcrumbLink = ({
  asChild,
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"a"> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn("transition-colors hover:text-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};

const BreadcrumbPage = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<"span">) => (
  <span
    aria-current="page"
    aria-disabled="true"
    className={cn("font-normal text-foreground", className)}
    ref={ref}
    {...props}
  />
);

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    aria-hidden="true"
    className={cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className)}
    role="presentation"
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    role="presentation"
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
