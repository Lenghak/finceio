import { Separator } from "@packages/shadcn/components/separator";
import { cn } from "@packages/shadcn/lib/utils";
import type React from "react";
import type { ComponentPropsWithRef } from "react";

export interface InputProps extends ComponentPropsWithRef<"input"> {}

const Input = ({ className, type, ref, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all duration-200 ease-in-out file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  );
};
export interface InputAddonsProps extends InputProps {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

const InputInlineAddons = ({
  className,
  leftAddon,
  rightAddon,
  ref,
  ...props
}: InputAddonsProps) => {
  return (
    <div className="flex rounded-md shadow-xs [&_svg]:size-[1.125rem]">
      {leftAddon && (
        <div className="flex items-center justify-center rounded-l-full border border-input border-r-0 pr-3 pl-4 text-muted-foreground text-sm">
          {leftAddon}
        </div>
      )}
      <Input
        className={cn(
          "grow",
          className,
          leftAddon && "rounded-l-none",
          rightAddon && "rounded-r-none",
        )}
        ref={ref}
        {...props}
      />
      {rightAddon && (
        <div className="flex items-center justify-center rounded-r-md border border-input border-l-0 bg-background px-3 text-muted-foreground text-sm">
          {rightAddon}
        </div>
      )}
    </div>
  );
};

export interface InputAbsoluteAddonProps extends InputProps {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  leftSeparator?: boolean;
  rightSeparator?: boolean;
}

const InputAbsoluteAddon = ({
  className,
  leftAddon,
  rightAddon,
  leftSeparator,
  rightSeparator,
  ref,
  ...props
}: InputAbsoluteAddonProps) => {
  return (
    <div className="relative [&_svg]:size-[1.125rem]">
      {leftAddon && (
        <div className="absolute top-0 bottom-0 left-0 flex items-center pl-4 text-muted-foreground">
          {leftAddon}
          {leftSeparator && (
            <Separator
              className="ml-3.5 h-5"
              orientation="vertical"
            />
          )}
        </div>
      )}
      <Input
        className={cn(
          leftAddon && "pl-12",
          leftAddon && leftSeparator && "pl-[3.75rem]",
          rightAddon && "pr-12",
          rightAddon && rightSeparator && "pr-[3.75rem]",
          className,
        )}
        ref={ref}
        {...props}
      />
      {rightAddon && (
        <div className="absolute top-0 right-0 bottom-0 flex items-center pr-4 text-muted-foreground">
          {rightSeparator && (
            <Separator
              className="mr-3.5 h-5"
              orientation="vertical"
            />
          )}
          {rightAddon}
        </div>
      )}
    </div>
  );
};

export { Input, InputInlineAddons, InputAbsoluteAddon };
