import type { ComponentPropsWithRef } from "react";

import { cn } from "@packages/shadcn/lib/utils";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        soft: "",
        outline: "border border-input",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 [&_svg]:size-4",
        xs: "h-6 px-2 [&_svg]:size-4",
        sm: "h-8 px-3 [&_svg]:size-4",
        lg: "h-11 px-9 [&_svg]:size-5",
        icon: "h-10 w-10 [&_svg]:size-4",
      },
      effect: {
        expandIconLeft:
          "gap-0 [&:hover_svg]:mr-2 [&:hover_svg]:w-4 [&:hover_svg]:translate-x-100 [&:hover_svg]:opacity-100 [&_svg]:w-0 [&_svg]:translate-x-[0%] [&_svg]:pr-0 [&_svg]:opacity-0 [&_svg]:transition-all [&_svg]:duration-200",
        expandIconRight:
          "gap-0 [&:hover_svg]:ml-2 [&:hover_svg]:w-4 [&:hover_svg]:translate-x-0 [&:hover_svg]:opacity-100 [&_svg]:w-0 [&_svg]:translate-x-[100%] [&_svg]:pl-0 [&_svg]:opacity-0 [&_svg]:transition-all [&_svg]:duration-200",
        ringHover:
          "transition-all duration-300 hover:ring-2 hover:ring-current/90 hover:ring-offset-2",
        shine:
          "animate-shine bg-[length:400%_100%] bg-linear-to-r from-current to-current",
        gooeyRight:
          "before:-z-10 relative z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-linear-to-r before:transition-transform before:duration-1000 hover:before:translate-x-[0%] hover:before:translate-y-[0%]",
        gooeyLeft:
          "after:-z-10 relative z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-linear-to-l after:transition-transform after:duration-1000 hover:after:translate-x-[0%] hover:after:translate-y-[0%]",
        linkHover1:
          "relative after:absolute after:bottom-0 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:no-underline hover:after:origin-bottom-right hover:after:scale-x-0",
        linkHover2:
          "relative after:absolute after:bottom-0 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:no-underline hover:after:origin-bottom-left hover:after:scale-x-100",
        loading: "transition-all [&_svg]:animate-spin [&_svg]:transition-all",
        hideIcon: "transition-all [&_svg]:size-0 [&_svg]:transition-all",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        destructive: "",
        slate: "",
        gray: "",
        zinc: "",
        neutral: "",
        stone: "",
        red: "",
        orange: "",
        amber: "",
        yellow: "",
        lime: "",
        green: "",
        emerald: "",
        teal: "",
        cyan: "",
        sky: "",
        blue: "",
        indigo: "",
        violet: "",
        purple: "",
        fuchsia: "",
        pink: "",
        rose: "",
      },
    },
    compoundVariants: [
      // Default variant
      {
        variant: "default",
        color: "default",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "default",
        color: "secondary",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "default",
        color: "destructive",
        className:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
      },
      // Outline variant
      {
        variant: "outline",
        color: "default",
        className:
          "text-primary hover:bg-primary/10 dark:text-primary dark:hover:bg-primary/10",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "text-secondary-foreground hover:bg-secondary/10 dark:text-secondary-foreground dark:hover:bg-secondary/10",
      },
      {
        variant: "outline",
        color: "destructive",
        className:
          "border-destructive text-destructive hover:bg-destructive/10 focus-visible:ring-destructive dark:border-destructive dark:text-destructive dark:hover:bg-destructive/10",
      },
      // Ghost variant
      {
        variant: "ghost",
        color: "default",
        className:
          "text-primary hover:bg-primary/10 dark:text-primary dark:hover:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "text-secondary-forground hover:bg-secondary/10 dark:text-secondary dark:hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        color: "destructive",
        className:
          "text-destructive hover:bg-destructive/10 focus-visible:ring-destructive dark:text-destructive dark:hover:bg-destructive/10",
      },
      // Soft variant
      {
        variant: "soft",
        color: "default",
        className:
          "bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/30",
      },
      {
        variant: "soft",
        color: "secondary",
        className:
          "bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 dark:bg-secondary/20 dark:text-secondary-foreground dark:hover:bg-secondary/30",
      },
      {
        variant: "soft",
        color: "destructive",
        className:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive dark:bg-destructive/20 dark:text-destructive dark:hover:bg-destructive/30",
      },
      // Link variant
      {
        variant: "link",
        color: "default",
        className:
          "text-primary-foreground hover:text-primary-foreground/80 dark:text-primary-foreground dark:hover:text-primary-foreground/80",
      },
      {
        variant: "link",
        color: "secondary",
        className:
          "text-secondary-foreground hover:text-secondary-foreground/80 dark:text-secondary-foreground dark:hover:text-secondary-foreground/80",
      },
      {
        variant: "link",
        color: "destructive",
        className:
          "text-destructive hover:text-destructive/80 focus-visible:ring-destructive dark:text-destructive dark:hover:text-destructive/80",
      },
      // Tailwind colors for default variant
      ...[
        "slate" as const,
        "gray" as const,
        "zinc" as const,
        "neutral" as const,
        "stone" as const,
        "red" as const,
        "orange" as const,
        "amber" as const,
        "yellow" as const,
        "lime" as const,
        "green" as const,
        "emerald" as const,
        "teal" as const,
        "cyan" as const,
        "sky" as const,
        "blue" as const,
        "indigo" as const,
        "violet" as const,
        "purple" as const,
        "fuchsia" as const,
        "pink" as const,
        "rose" as const,
      ].flatMap((color) => [
        {
          variant: "default" as const,
          color,
          className: `bg-${color}-500 text-${color}-50 hover:bg-${color}-600 dark:bg-${color}-600 dark:text-${color}-50 dark:hover:bg-${color}-700 focus-visible:ring-${color}-500`,
        },
        {
          variant: "outline" as const,
          color,
          className: `border-${color}-500 text-${color}-500 hover:bg-${color}-50 dark:border-${color}-400 dark:text-${color}-400 dark:hover:bg-${color}-950 focus-visible:ring-${color}-500`,
        },
        {
          variant: "ghost" as const,
          color,
          className: `text-${color}-500 hover:bg-${color}-50 hover:text-${color}-600 dark:text-${color}-400 dark:hover:bg-${color}-950 dark:hover:text-${color}-300 focus-visible:ring-${color}-500`,
        },
        {
          variant: "soft" as const,
          color,
          className: `bg-${color}-50 text-${color}-500 hover:bg-${color}-100 dark:bg-${color}-950 dark:text-${color}-400 dark:hover:bg-${color}-900 focus-visible:ring-${color}-500`,
        },
        {
          variant: "link" as const,
          color,
          className: `text-${color}-500 hover:text-${color}-600 dark:text-${color}-400 dark:hover:text-${color}-300 focus-visible:ring-${color}-500`,
        },
      ]),
    ],

    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<ComponentPropsWithRef<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  variant,
  size,
  color,
  asChild = false,
  effect,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, color, effect, className }),
      )}
      {...props}
    >
      <Slottable>{props.children}</Slottable>
    </Comp>
  );
};

export { Button, buttonVariants };
