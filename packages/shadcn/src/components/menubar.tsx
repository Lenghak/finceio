"use client";

import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Menu,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import type { ComponentPropsWithRef, HTMLAttributes } from "react";

import { cn } from "@packages/shadcn/lib/utils";

const MenubarMenu = Menu;

const MenubarGroup = Group;

const MenubarPortal = Portal;

const MenubarSub = Sub;

const MenubarRadioGroup = RadioGroup;

const Menubar = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Root>) => (
  <Root
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className,
    )}
    {...props}
  />
);

const MenubarTrigger = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Trigger>) => (
  <Trigger
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
);

const MenubarSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ComponentPropsWithRef<typeof SubTrigger> & { inset?: boolean }) => (
  <SubTrigger
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </SubTrigger>
);

const MenubarSubContent = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof SubContent>) => (
  <SubContent
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    {...props}
  />
);

const MenubarContent = ({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: ComponentPropsWithRef<typeof Content>) => (
  <Portal>
    <Content
      align={align}
      alignOffset={alignOffset}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in",
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  </Portal>
);

const MenubarItem = ({
  className,
  inset,
  ...props
}: ComponentPropsWithRef<typeof Item> & { inset?: boolean }) => (
  <Item
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
);

const MenubarCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: ComponentPropsWithRef<typeof CheckboxItem>) => (
  <CheckboxItem
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
);

const MenubarRadioItem = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<typeof RadioItem>) => (
  <RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
);

const MenubarLabel = ({
  className,
  inset,
  ...props
}: ComponentPropsWithRef<typeof Label> & { inset?: boolean }) => (
  <Label
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
);

const MenubarSeparator = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Separator>) => (
  <Separator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
);

const MenubarShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest",
      className,
    )}
    {...props}
  />
);

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
