"use client";

import {
  Action,
  Close,
  Description,
  Provider,
  Root,
  Title,
  Viewport,
} from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const ToastProvider = Provider;

const ToastViewport = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Viewport>) => (
  <Viewport
    className={cn(
      "fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const toastVariants = cva(
  "group data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-out data-[state=open]:animate-in data-[swipe=end]:animate-out data-[swipe=move]:transition-none",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = ({
  className,
  variant,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Root> &
  VariantProps<typeof toastVariants>) => {
  return (
    <Root
      className={cn(toastVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
};

const ToastAction = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Action>) => (
  <Action
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 font-medium text-sm ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 focus:group-[.destructive]:ring-destructive hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground",
      className,
    )}
    ref={ref}
    {...props}
  />
);

const ToastClose = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Close>) => (
  <Close
    className={cn(
      "absolute top-2 right-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600 hover:group-[.destructive]:text-red-50",
      className,
    )}
    ref={ref}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </Close>
);

const ToastTitle = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Title>) => (
  <Title
    className={cn("font-semibold text-sm", className)}
    ref={ref}
    {...props}
  />
);
const ToastDescription = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Description>) => (
  <Description
    className={cn("text-sm opacity-90", className)}
    ref={ref}
    {...props}
  />
);

type ToastProps = React.ComponentPropsWithRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
