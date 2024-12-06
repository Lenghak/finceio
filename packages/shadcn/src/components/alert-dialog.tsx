"use client";

import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-alert-dialog";
import type React from "react";

import { buttonVariants } from "@packages/shadcn/components/button";
import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

const AlertDialog = Root;

const AlertDialogTrigger = Trigger;

const AlertDialogPortal = Portal;

const AlertDialogOverlay = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Overlay>) => (
  <Overlay
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const AlertDialogContent = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Content>) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <Content
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:rounded-lg",
        className,
      )}
      ref={ref}
      {...props}
    />
  </AlertDialogPortal>
);

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);

const AlertDialogTitle = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Title>) => (
  <Title
    className={cn("font-semibold text-lg", className)}
    ref={ref}
    {...props}
  />
);

const AlertDialogDescription = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Description>) => (
  <Description
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
);

const AlertDialogAction = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Action>) => (
  <Action
    className={cn(buttonVariants(), className)}
    ref={ref}
    {...props}
  />
);

const AlertDialogCancel = ({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<typeof Cancel>) => (
  <Cancel
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className,
    )}
    ref={ref}
    {...props}
  />
);

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
