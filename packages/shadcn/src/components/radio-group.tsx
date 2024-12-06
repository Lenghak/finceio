"use client";

import { Indicator, Item, Root } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

const RadioGroup = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Root>) => {
  return (
    <Root
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
};

const RadioGroupItem = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Item>) => {
  return (
    <Item
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </Indicator>
    </Item>
  );
};

export { RadioGroup, RadioGroupItem };
