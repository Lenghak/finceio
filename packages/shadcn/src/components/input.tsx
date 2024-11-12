import { Separator } from "@packages/shadcn/components/separator";
import { cn } from "@packages/shadcn/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconSeparator?: boolean;
}

const IconInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, iconLeft, iconRight, iconSeparator, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center [&_svg]:size-4 [&_svg]:text-muted-foreground">
        {iconLeft && (
          <div className="pointer-events-none absolute left-4 flex items-center">
            {iconLeft}
          </div>
        )}
        <Input
          className={cn(
            iconLeft && "pl-12",
            iconRight && "pr-12",
            iconSeparator && iconLeft && "pl-14",
            iconSeparator && iconRight && "pr-14",
            "font-semibold",
            className,
          )}
          ref={ref}
          type={type}
          {...props}
        />
        {iconLeft && iconSeparator && (
          <Separator
            className="absolute left-11 h-5"
            orientation="vertical"
          />
        )}
        {iconRight && (
          <div className="pointer-events-none absolute right-4 flex items-center">
            {iconRight}
          </div>
        )}
        {iconRight && iconSeparator && (
          <Separator
            className="absolute right-11 h-5"
            orientation="vertical"
          />
        )}
      </div>
    );
  },
);
IconInput.displayName = "CustomInput";

export { Input, IconInput };
