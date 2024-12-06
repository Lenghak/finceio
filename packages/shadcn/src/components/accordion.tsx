"use client";

import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";

import { cn } from "@packages/shadcn/lib/utils";

const Accordion = Root;

const AccordionItem = ({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Item>) => (
  <Item
    className={cn("border-b", className)}
    ref={ref}
    {...props}
  />
);

const AccordionTrigger = ({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Trigger>) => (
  <Header className="flex">
    <Trigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Trigger>
  </Header>
);

const AccordionContent = ({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<typeof Content>) => (
  <Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
