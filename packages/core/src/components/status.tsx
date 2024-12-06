import {
  TypographyH1,
  TypographyMuted,
} from "@packages/shadcn/components/typography";
import { cn } from "@packages/shadcn/lib/utils";
import type React from "react";
import type { HTMLAttributes } from "react";

export type StatusProps = HTMLAttributes<HTMLElement> & {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
};

export const Status = ({
  children,
  className,
  title,
  description,
  icon,
  ...props
}: StatusProps) => (
  <div
    className={cn(
      "flex h-full w-full flex-col items-center justify-center space-y-6 text-center",
      "[&>svg]:size-36 [&>svg]:fill-primary/10 [&>svg]:stroke-1 [&>svg]:stroke-primary",
      className,
    )}
    {...props}
  >
    {icon}

    {typeof title === "string" ? (
      <TypographyH1 className="text-primary">{title}</TypographyH1>
    ) : (
      title
    )}

    {typeof description === "string" ? (
      <TypographyMuted className="text-base">{description}</TypographyMuted>
    ) : (
      description
    )}

    {children}
  </div>
);
