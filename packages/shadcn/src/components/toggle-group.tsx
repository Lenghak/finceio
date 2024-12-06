"use client";

import { Item, Root } from "@radix-ui/react-toggle-group";
import type { VariantProps } from "class-variance-authority";
import React from "react";

import { toggleVariants } from "@packages/shadcn/components/toggle";
import { cn } from "@packages/shadcn/lib/utils";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

const ToggleGroup = ({
  className,
  variant,
  size,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Root> &
  VariantProps<typeof toggleVariants>) => (
  <Root
    className={cn("flex items-center justify-center gap-1", className)}
    ref={ref}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </Root>
);

ToggleGroup.displayName = Root.displayName;

const ToggleGroupItem = ({
  className,
  children,
  variant,
  size,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Item> &
  VariantProps<typeof toggleVariants>) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <Item
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: size,
        }),
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Item>
  );
};

export { ToggleGroup, ToggleGroupItem };
