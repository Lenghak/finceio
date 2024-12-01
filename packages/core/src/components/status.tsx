import { Flex } from "@packages/shadcn/components/flex";
import {
  TypographyH1,
  TypographyMuted,
} from "@packages/shadcn/components/typography";
import { cn } from "@packages/shadcn/lib/utils";
import type React from "react";
import type { HTMLAttributes } from "react";

export type StatusProps = HTMLAttributes<HTMLDivElement> & {
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
  <Flex
    className={cn(
      "h-full w-full space-y-6 text-center",
      "[&>svg]:size-36 [&>svg]:fill-primary/10 [&>svg]:stroke-1 [&>svg]:stroke-primary",
      className,
    )}
    direction="col"
    items="center"
    justify="center"
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
  </Flex>
);
