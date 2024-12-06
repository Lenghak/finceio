import { cn } from "@packages/shadcn/lib/utils";
import type React from "react";

const Table = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"table">) => (
  <div className="relative w-full overflow-auto">
    <table
      className={cn("w-full caption-bottom text-sm", className)}
      ref={ref}
      {...props}
    />
  </div>
);

const TableHeader = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"thead">) => (
  <thead
    className={cn("[&_tr]:border-b", className)}
    ref={ref}
    {...props}
  />
);

const TableBody = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"tbody">) => (
  <tbody
    className={cn("[&_tr:last-child]:border-0", className)}
    ref={ref}
    {...props}
  />
);

const TableFooter = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"tfoot">) => (
  <tfoot
    className={cn(
      "border-t bg-muted/50 font-medium last:[&>tr]:border-b-0",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const TableRow = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"tr">) => (
  <tr
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const TableHead = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"th">) => (
  <th
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const TableCell = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"td">) => (
  <td
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    ref={ref}
    {...props}
  />
);

const TableCaption = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"caption">) => (
  <caption
    className={cn("mt-4 text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
);

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
