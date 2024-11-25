import { cn } from "@packages/shadcn/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { type ButtonHTMLAttributes, Fragment, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        "1": "h-8 px-3 text-xs",
        "2": "h-9 px-4 text-sm",
        "3": "h-10 px-5 text-base",
        "4": "h-11 px-6 text-lg",
      },
      variant: {
        solid: "",
        soft: "bg-opacity-20 hover:bg-opacity-30",
        outline: "border border-solid",
        ghost: "hover:bg-opacity-10",
      },
      color: {
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
      highContrast: {
        true: "font-semibold",
      },
      radius: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded",
        large: "rounded-md",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      // Slate
      {
        variant: "solid",
        color: "slate",
        className: "bg-slate-900 text-white hover:bg-slate-800",
      },
      {
        variant: "soft",
        color: "slate",
        className: "bg-slate-200 text-slate-900 hover:bg-slate-300",
      },
      {
        variant: "outline",
        color: "slate",
        className: "border-slate-300 text-slate-900 hover:bg-slate-100",
      },
      {
        variant: "ghost",
        color: "slate",
        className: "text-slate-900 hover:bg-slate-100",
      },
      // Gray
      {
        variant: "solid",
        color: "gray",
        className: "bg-gray-900 text-white hover:bg-gray-800",
      },
      {
        variant: "soft",
        color: "gray",
        className: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      },
      {
        variant: "outline",
        color: "gray",
        className: "border-gray-300 text-gray-900 hover:bg-gray-100",
      },
      {
        variant: "ghost",
        color: "gray",
        className: "text-gray-900 hover:bg-gray-100",
      },
      // Zinc
      {
        variant: "solid",
        color: "zinc",
        className: "bg-zinc-900 text-white hover:bg-zinc-800",
      },
      {
        variant: "soft",
        color: "zinc",
        className: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
      },
      {
        variant: "outline",
        color: "zinc",
        className: "border-zinc-300 text-zinc-900 hover:bg-zinc-100",
      },
      {
        variant: "ghost",
        color: "zinc",
        className: "text-zinc-900 hover:bg-zinc-100",
      },
      // Neutral
      {
        variant: "solid",
        color: "neutral",
        className: "bg-neutral-900 text-white hover:bg-neutral-800",
      },
      {
        variant: "soft",
        color: "neutral",
        className: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
      },
      {
        variant: "outline",
        color: "neutral",
        className: "border-neutral-300 text-neutral-900 hover:bg-neutral-100",
      },
      {
        variant: "ghost",
        color: "neutral",
        className: "text-neutral-900 hover:bg-neutral-100",
      },
      // Stone
      {
        variant: "solid",
        color: "stone",
        className: "bg-stone-900 text-white hover:bg-stone-800",
      },
      {
        variant: "soft",
        color: "stone",
        className: "bg-stone-200 text-stone-900 hover:bg-stone-300",
      },
      {
        variant: "outline",
        color: "stone",
        className: "border-stone-300 text-stone-900 hover:bg-stone-100",
      },
      {
        variant: "ghost",
        color: "stone",
        className: "text-stone-900 hover:bg-stone-100",
      },
      // Red
      {
        variant: "solid",
        color: "red",
        className: "bg-red-600 text-white hover:bg-red-700",
      },
      {
        variant: "soft",
        color: "red",
        className: "bg-red-100 text-red-900 hover:bg-red-200",
      },
      {
        variant: "outline",
        color: "red",
        className: "border-red-300 text-red-900 hover:bg-red-100",
      },
      {
        variant: "ghost",
        color: "red",
        className: "text-red-900 hover:bg-red-100",
      },
      // Orange
      {
        variant: "solid",
        color: "orange",
        className: "bg-orange-600 text-white hover:bg-orange-700",
      },
      {
        variant: "soft",
        color: "orange",
        className: "bg-orange-100 text-orange-900 hover:bg-orange-200",
      },
      {
        variant: "outline",
        color: "orange",
        className: "border-orange-300 text-orange-900 hover:bg-orange-100",
      },
      {
        variant: "ghost",
        color: "orange",
        className: "text-orange-900 hover:bg-orange-100",
      },
      // Amber
      {
        variant: "solid",
        color: "amber",
        className: "bg-amber-600 text-white hover:bg-amber-700",
      },
      {
        variant: "soft",
        color: "amber",
        className: "bg-amber-100 text-amber-900 hover:bg-amber-200",
      },
      {
        variant: "outline",
        color: "amber",
        className: "border-amber-300 text-amber-900 hover:bg-amber-100",
      },
      {
        variant: "ghost",
        color: "amber",
        className: "text-amber-900 hover:bg-amber-100",
      },
      // Yellow
      {
        variant: "solid",
        color: "yellow",
        className: "bg-yellow-500 text-white hover:bg-yellow-600",
      },
      {
        variant: "soft",
        color: "yellow",
        className: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200",
      },
      {
        variant: "outline",
        color: "yellow",
        className: "border-yellow-300 text-yellow-900 hover:bg-yellow-100",
      },
      {
        variant: "ghost",
        color: "yellow",
        className: "text-yellow-900 hover:bg-yellow-100",
      },
      // Lime
      {
        variant: "solid",
        color: "lime",
        className: "bg-lime-600 text-white hover:bg-lime-700",
      },
      {
        variant: "soft",
        color: "lime",
        className: "bg-lime-100 text-lime-900 hover:bg-lime-200",
      },
      {
        variant: "outline",
        color: "lime",
        className: "border-lime-300 text-lime-900 hover:bg-lime-100",
      },
      {
        variant: "ghost",
        color: "lime",
        className: "text-lime-900 hover:bg-lime-100",
      },
      // Green
      {
        variant: "solid",
        color: "green",
        className: "bg-green-600 text-white hover:bg-green-700",
      },
      {
        variant: "soft",
        color: "green",
        className: "bg-green-100 text-green-900 hover:bg-green-200",
      },
      {
        variant: "outline",
        color: "green",
        className: "border-green-300 text-green-900 hover:bg-green-100",
      },
      {
        variant: "ghost",
        color: "green",
        className: "text-green-900 hover:bg-green-100",
      },
      // Emerald
      {
        variant: "solid",
        color: "emerald",
        className: "bg-emerald-600 text-white hover:bg-emerald-700",
      },
      {
        variant: "soft",
        color: "emerald",
        className: "bg-emerald-100 text-emerald-900 hover:bg-emerald-200",
      },
      {
        variant: "outline",
        color: "emerald",
        className: "border-emerald-300 text-emerald-900 hover:bg-emerald-100",
      },
      {
        variant: "ghost",
        color: "emerald",
        className: "text-emerald-900 hover:bg-emerald-100",
      },
      // Teal
      {
        variant: "solid",
        color: "teal",
        className: "bg-teal-600 text-white hover:bg-teal-700",
      },
      {
        variant: "soft",
        color: "teal",
        className: "bg-teal-100 text-teal-900 hover:bg-teal-200",
      },
      {
        variant: "outline",
        color: "teal",
        className: "border-teal-300 text-teal-900 hover:bg-teal-100",
      },
      {
        variant: "ghost",
        color: "teal",
        className: "text-teal-900 hover:bg-teal-100",
      },
      // Cyan
      {
        variant: "solid",
        color: "cyan",
        className: "bg-cyan-600 text-white hover:bg-cyan-700",
      },
      {
        variant: "soft",
        color: "cyan",
        className: "bg-cyan-100 text-cyan-900 hover:bg-cyan-200",
      },
      {
        variant: "outline",
        color: "cyan",
        className: "border-cyan-300 text-cyan-900 hover:bg-cyan-100",
      },
      {
        variant: "ghost",
        color: "cyan",
        className: "text-cyan-900 hover:bg-cyan-100",
      },
      // Sky
      {
        variant: "solid",
        color: "sky",
        className: "bg-sky-600 text-white hover:bg-sky-700",
      },
      {
        variant: "soft",
        color: "sky",
        className: "bg-sky-100 text-sky-900 hover:bg-sky-200",
      },
      {
        variant: "outline",
        color: "sky",
        className: "border-sky-300 text-sky-900 hover:bg-sky-100",
      },
      {
        variant: "ghost",
        color: "sky",
        className: "text-sky-900 hover:bg-sky-100",
      },
      // Blue
      {
        variant: "solid",
        color: "blue",
        className: "bg-blue-600 text-white hover:bg-blue-700",
      },
      {
        variant: "soft",
        color: "blue",
        className: "bg-blue-100 text-blue-900 hover:bg-blue-200",
      },
      {
        variant: "outline",
        color: "blue",
        className: "border-blue-300 text-blue-900 hover:bg-blue-100",
      },
      {
        variant: "ghost",
        color: "blue",
        className: "text-blue-900 hover:bg-blue-100",
      },
      // Indigo
      {
        variant: "solid",
        color: "indigo",
        className: "bg-indigo-600 text-white hover:bg-indigo-700",
      },
      {
        variant: "soft",
        color: "indigo",
        className: "bg-indigo-100 text-indigo-900 hover:bg-indigo-200",
      },
      {
        variant: "outline",
        color: "indigo",
        className: "border-indigo-300 text-indigo-900 hover:bg-indigo-100",
      },
      {
        variant: "ghost",
        color: "indigo",
        className: "text-indigo-900 hover:bg-indigo-100",
      },
      // Violet
      {
        variant: "solid",
        color: "violet",
        className: "bg-violet-600 text-white hover:bg-violet-700",
      },
      {
        variant: "soft",
        color: "violet",
        className: "bg-violet-100 text-violet-900 hover:bg-violet-200",
      },
      {
        variant: "outline",
        color: "violet",
        className: "border-violet-300 text-violet-900 hover:bg-violet-100",
      },
      {
        variant: "ghost",
        color: "violet",
        className: "text-violet-900 hover:bg-violet-100",
      },
      // Purple
      {
        variant: "solid",
        color: "purple",
        className: "bg-purple-600 text-white hover:bg-purple-700",
      },
      {
        variant: "soft",
        color: "purple",
        className: "bg-purple-100 text-purple-900 hover:bg-purple-200",
      },
      {
        variant: "outline",
        color: "purple",
        className: "border-purple-300 text-purple-900 hover:bg-purple-100",
      },
      {
        variant: "ghost",
        color: "purple",
        className: "text-purple-900 hover:bg-purple-100",
      },
      // Fuchsia
      {
        variant: "solid",
        color: "fuchsia",
        className: "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
      },
      {
        variant: "soft",
        color: "fuchsia",
        className: "bg-fuchsia-100 text-fuchsia-900 hover:bg-fuchsia-200",
      },
      {
        variant: "outline",
        color: "fuchsia",
        className: "border-fuchsia-300 text-fuchsia-900 hover:bg-fuchsia-100",
      },
      {
        variant: "ghost",
        color: "fuchsia",
        className: "text-fuchsia-900 hover:bg-fuchsia-100",
      },
      // Pink
      {
        variant: "solid",
        color: "pink",
        className: "bg-pink-600 text-white hover:bg-pink-700",
      },
      {
        variant: "soft",
        color: "pink",
        className: "bg-pink-100 text-pink-900 hover:bg-pink-200",
      },
      {
        variant: "outline",
        color: "pink",
        className: "border-pink-300 text-pink-900 hover:bg-pink-100",
      },
      {
        variant: "ghost",
        color: "pink",
        className: "text-pink-900 hover:bg-pink-100",
      },
      // Rose
      {
        variant: "solid",
        color: "rose",
        className: "bg-rose-600 text-white hover:bg-rose-700",
      },
      {
        variant: "soft",
        color: "rose",
        className: "bg-rose-100 text-rose-900 hover:bg-rose-200",
      },
      {
        variant: "outline",
        color: "rose",
        className: "border-rose-300 text-rose-900 hover:bg-rose-100",
      },
      {
        variant: "ghost",
        color: "rose",
        className: "text-rose-900 hover:bg-rose-100",
      },
    ],
    defaultVariants: {
      size: "2",
      variant: "solid",
      color: "slate",
      radius: "medium",
    },
  },
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      color,
      highContrast,
      radius,
      loading,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Fragment : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ size, variant, color, highContrast, radius }),
          loading && "cursor-not-allowed opacity-50",
          className,
        )}
        disabled={loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <span className="opacity-0">{props.children}</span>
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
