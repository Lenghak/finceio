import { Flex } from "@packages/shadcn/components/flex";
import {
  TypographyH1,
  TypographyP,
} from "@packages/shadcn/components/typography";
import { cn } from "@packages/shadcn/lib/utils";
import { TrafficConeIcon } from "lucide-react";
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
    className={cn("h-full w-full space-y-6 text-center", className)}
    direction="col"
    items="center"
    justify="center"
    {...props}
  >
    {icon ?? (
      <TrafficConeIcon className="size-36 fill-primary/10 stroke-1 stroke-primary" />
    )}

    {typeof title === "string" ? (
      <TypographyH1 className="text-primary">{title}</TypographyH1>
    ) : (
      title
    )}

    {typeof description === "string" ? (
      <TypographyP className="text-muted-foreground">{description}</TypographyP>
    ) : (
      description
    )}

    {children}
  </Flex>
);
