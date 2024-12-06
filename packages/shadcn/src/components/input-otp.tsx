"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const InputOTP = ({
  className,
  containerClassName,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof OTPInput>) => (
  <OTPInput
    className={cn("disabled:cursor-not-allowed", className)}
    containerClassName={cn(
      "flex items-center gap-2 has-disabled:opacity-50",
      containerClassName,
    )}
    ref={ref}
    {...props}
  />
);

const InputOTPGroup = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    className={cn("flex items-center", className)}
    ref={ref}
    {...props}
  />
);

const InputOTPSlot = ({
  index,
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div"> & { index: number }) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index];

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-input border-y border-r text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        slot?.isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      ref={ref}
      {...props}
    >
      {slot?.char}
      {slot?.hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
};
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = ({
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) => (
  <div
    ref={ref}
    role="presentation"
    {...props}
  >
    <Dot />
  </div>
);
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
