"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const Tabs = Root;

const TabsList = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof List>) => (
  <List
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const TabsTrigger = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Trigger>) => (
  <Trigger
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const TabsContent = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Content>) => (
  <Content
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    ref={ref}
    {...props}
  />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
