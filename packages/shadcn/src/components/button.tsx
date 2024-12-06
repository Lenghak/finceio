import type { ComponentPropsWithRef } from "react";

import { cn } from "@packages/shadcn/lib/utils";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "group relative inline-flex cursor-pointer items-center justify-center rounded-full font-bold text-sm ring-tranparent ring-offset-transparent transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "",
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
          "[&:hover_svg]:mr-2 [&:hover_svg]:w-4 [&:hover_svg]:translate-x-100 [&:hover_svg]:opacity-100 [&_svg]:w-0 [&_svg]:translate-x-[0%] [&_svg]:pr-0 [&_svg]:opacity-0 [&_svg]:transition-all [&_svg]:duration-200",
        expandIconRight:
          "[&:hover_svg]:ml-2 [&:hover_svg]:w-4 [&:hover_svg]:translate-x-0 [&:hover_svg]:opacity-100 [&_svg]:w-0 [&_svg]:translate-x-[100%] [&_svg]:pl-0 [&_svg]:opacity-0 [&_svg]:transition-all [&_svg]:duration-200",
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
        default:
          "border-primary bg-primary text-primary-foreground focus-visible:ring-primary",
        secondary:
          "border-border bg-secondary text-secondary-foreground focus-visible:ring-ring",
        destructive:
          "border-destructive-200 bg-destructive text-destructive-foreground focus-visible:ring-destructive dark:border-destructive-900",
        slate:
          "border-slate-200 bg-slate-500 text-slate-50 focus-visible:ring-slate-500 dark:border-slate-900",
        gray: "border-gray-200 bg-gray-500 text-gray-50 focus-visible:ring-gray-500 dark:border-gray-900",
        zinc: "border-zinc-200 bg-zinc-500 text-zinc-50 focus-visible:ring-zinc-500 dark:border-zinc-900",
        neutral:
          "border-neutral-200 bg-neutral-500 text-neutral-50 focus-visible:ring-neutral-500 dark:border-neutral-900",
        stone:
          "border-stone-200 bg-stone-500 text-stone-50 focus-visible:ring-stone-500 dark:border-stone-900",
        red: "border-red-200 bg-red-500 text-red-50 focus-visible:ring-red-500 dark:border-red-900",
        orange:
          "border-orange-200 bg-orange-500 text-orange-50 focus-visible:ring-orange-500 dark:border-orange-900",
        amber:
          "border-amber-200 bg-amber-500 text-amber-50 focus-visible:ring-amber-500 dark:border-amber-900",
        yellow:
          "border-yellow-200 bg-yellow-500 text-yellow-50 focus-visible:ring-yellow-500 dark:border-yellow-900",
        lime: "border-lime-200 bg-lime-500 text-lime-50 focus-visible:ring-lime-500 dark:border-lime-900",
        green:
          "border-green-200 bg-green-500 text-green-50 focus-visible:ring-green-500 dark:border-green-900",
        emerald:
          "border-emerald-200 bg-emerald-500 text-emerald-50 focus-visible:ring-emerald-500 dark:border-emerald-900",
        teal: "border-teal-200 bg-teal-500 text-teal-50 focus-visible:ring-teal-500 dark:border-teal-900",
        cyan: "border-cyan-200 bg-cyan-500 text-cyan-50 focus-visible:ring-cyan-500 dark:border-cyan-900",
        sky: "border-sky-200 bg-sky-500 text-sky-50 focus-visible:ring-sky-500 dark:border-sky-900",
        blue: "border-blue-200 bg-blue-500 text-blue-50 focus-visible:ring-blue-500 dark:border-blue-900",
        indigo:
          "border-indigo-200 bg-indigo-500 text-indigo-50 focus-visible:ring-indigo-500 dark:border-indigo-900",
        violet:
          "border-violet-200 bg-violet-500 text-violet-50 focus-visible:ring-violet-500 dark:border-violet-900",
        purple:
          "border-purple-200 bg-purple-500 text-purple-50 focus-visible:ring-purple-500 dark:border-purple-900",
        fuchsia:
          "border-fuchsia-200 bg-fuchsia-500 text-fuchsia-50 focus-visible:ring-fuchsia-500 dark:border-fuchsia-900",
        pink: "border-pink-200 bg-pink-500 text-pink-50 focus-visible:ring-pink-500 dark:border-pink-900",
        rose: "border-rose-200 bg-rose-500 text-rose-50 focus-visible:ring-rose-500 dark:border-rose-900",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "default",
        className: "hover:bg-primary/90 dark:hover:bg-primary/80",
      },
      {
        variant: "soft",
        color: "default",
        className:
          "bg-primary/20 text-primary hover:bg-primary/30 dark:bg-primary/10 dark:text-primary-foreground dark:hover:bg-primary/20",
      },
      {
        variant: "outline",
        color: "default",
        className:
          "border-border bg-transparent text-primary dark:text-primary-foreground",
      },
      {
        variant: "filled",
        color: "secondary",
        className: "hover:bg-secondary/80 dark:hover:bg-secondary/70",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "bg-transparent text-secondary-foreground hover:bg-secondary/30",
      },
      {
        variant: "soft",
        color: "secondary",
        className:
          "bg-secondary/20 text-secondary-foreground hover:bg-secondary/30",
      },
      {
        variant: "link",
        color: "secondary",
        className:
          "bg-transparent text-secondary-foreground hover:text-secondary-foreground/75",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground/75",
      },
      {
        variant: "filled",
        color: "destructive",
        className: "hover:bg-destructive/90 dark:hover:bg-destructive/80",
      },
      {
        variant: "soft",
        color: "destructive",
        className:
          "bg-destructive/20 text-destructive hover:bg-destructive/30 dark:bg-destructive/10 dark:text-destructive-foreground dark:hover:bg-destructive/20",
      },
      {
        variant: "outline",
        color: "destructive",
        className:
          "bg-transparent text-destructive hover:bg-destructive/10 dark:text-destructive-foreground dark:hover:bg-destructive/20",
      },
      {
        variant: "ghost",
        color: "destructive",
        className:
          "text-destructive hover:bg-destructive/10 dark:text-destructive-foreground dark:hover:bg-destructive/20",
      },
      {
        variant: "link",
        color: "destructive",
        className:
          "text-destructive hover:text-destructive/80 dark:text-destructive-foreground dark:hover:text-destructive-foreground/80",
      },
      {
        variant: "filled",
        color: "slate",
        className: "hover:bg-slate-600 dark:hover:bg-slate-700",
      },
      {
        variant: "soft",
        color: "slate",
        className:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
      },
      {
        variant: "outline",
        color: "slate",
        className:
          "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
      },
      {
        variant: "ghost",
        color: "slate",
        className:
          "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
      },
      {
        variant: "link",
        color: "slate",
        className:
          "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100",
      },
      {
        variant: "filled",
        color: "gray",
        className: "hover:bg-gray-600 dark:hover:bg-gray-700",
      },
      {
        variant: "soft",
        color: "gray",
        className:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
      },
      {
        variant: "outline",
        color: "gray",
        className:
          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
      },
      {
        variant: "ghost",
        color: "gray",
        className:
          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
      },
      {
        variant: "link",
        color: "gray",
        className:
          "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
      },
      {
        variant: "filled",
        color: "zinc",
        className: "hover:bg-zinc-600 dark:hover:bg-zinc-700",
      },
      {
        variant: "soft",
        color: "zinc",
        className:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
      },
      {
        variant: "outline",
        color: "zinc",
        className:
          "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
      },
      {
        variant: "ghost",
        color: "zinc",
        className:
          "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
      },
      {
        variant: "link",
        color: "zinc",
        className:
          "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100",
      },
      {
        variant: "filled",
        color: "neutral",
        className: "hover:bg-neutral-600 dark:hover:bg-neutral-700",
      },
      {
        variant: "soft",
        color: "neutral",
        className:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
      },
      {
        variant: "outline",
        color: "neutral",
        className:
          "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
      },
      {
        variant: "ghost",
        color: "neutral",
        className:
          "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
      },
      {
        variant: "link",
        color: "neutral",
        className:
          "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100",
      },
      {
        variant: "filled",
        color: "stone",
        className: "hover:bg-stone-600 dark:hover:bg-stone-700",
      },
      {
        variant: "soft",
        color: "stone",
        className:
          "bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700",
      },
      {
        variant: "outline",
        color: "stone",
        className:
          "text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800",
      },
      {
        variant: "ghost",
        color: "stone",
        className:
          "text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800",
      },
      {
        variant: "link",
        color: "stone",
        className:
          "text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100",
      },
      {
        variant: "filled",
        color: "red",
        className: "hover:bg-red-600 dark:hover:bg-red-700",
      },
      {
        variant: "soft",
        color: "red",
        className:
          "bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800",
      },
      {
        variant: "outline",
        color: "red",
        className:
          "text-red-700 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-900",
      },
      {
        variant: "ghost",
        color: "red",
        className:
          "text-red-700 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-900",
      },
      {
        variant: "link",
        color: "red",
        className:
          "text-red-700 hover:text-red-900 dark:text-red-300 dark:hover:text-red-100",
      },
      {
        variant: "filled",
        color: "orange",
        className: "hover:bg-orange-600 dark:hover:bg-orange-700",
      },
      {
        variant: "soft",
        color: "orange",
        className:
          "bg-orange-100 text-orange-900 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-100 dark:hover:bg-orange-800",
      },
      {
        variant: "outline",
        color: "orange",
        className:
          "text-orange-700 hover:bg-orange-100 dark:text-orange-300 dark:hover:bg-orange-900",
      },
      {
        variant: "ghost",
        color: "orange",
        className:
          "text-orange-700 hover:bg-orange-100 dark:text-orange-300 dark:hover:bg-orange-900",
      },
      {
        variant: "link",
        color: "orange",
        className:
          "text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-100",
      },
      {
        variant: "filled",
        color: "amber",
        className: "hover:bg-amber-600 dark:hover:bg-amber-700",
      },
      {
        variant: "soft",
        color: "amber",
        className:
          "bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800",
      },
      {
        variant: "outline",
        color: "amber",
        className:
          "text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900",
      },
      {
        variant: "ghost",
        color: "amber",
        className:
          "text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900",
      },
      {
        variant: "link",
        color: "amber",
        className:
          "text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100",
      },
      {
        variant: "filled",
        color: "yellow",
        className: "hover:bg-yellow-600 dark:hover:bg-yellow-700",
      },
      {
        variant: "soft",
        color: "yellow",
        className:
          "bg-yellow-100 text-yellow-900 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800",
      },
      {
        variant: "outline",
        color: "yellow",
        className:
          "text-yellow-700 hover:bg-yellow-100 dark:text-yellow-300 dark:hover:bg-yellow-900",
      },
      {
        variant: "ghost",
        color: "yellow",
        className:
          "text-yellow-700 hover:bg-yellow-100 dark:text-yellow-300 dark:hover:bg-yellow-900",
      },
      {
        variant: "link",
        color: "yellow",
        className:
          "text-yellow-700 hover:text-yellow-900 dark:text-yellow-300 dark:hover:text-yellow-100",
      },
      {
        variant: "filled",
        color: "lime",
        className: "hover:bg-lime-600 dark:hover:bg-lime-700",
      },
      {
        variant: "soft",
        color: "lime",
        className:
          "bg-lime-100 text-lime-900 hover:bg-lime-200 dark:bg-lime-900 dark:text-lime-100 dark:hover:bg-lime-800",
      },
      {
        variant: "outline",
        color: "lime",
        className:
          "text-lime-700 hover:bg-lime-100 dark:text-lime-300 dark:hover:bg-lime-900",
      },
      {
        variant: "ghost",
        color: "lime",
        className:
          "text-lime-700 hover:bg-lime-100 dark:text-lime-300 dark:hover:bg-lime-900",
      },
      {
        variant: "link",
        color: "lime",
        className:
          "text-lime-700 hover:text-lime-900 dark:text-lime-300 dark:hover:text-lime-100",
      },
      {
        variant: "filled",
        color: "green",
        className: "hover:bg-green-600 dark:hover:bg-green-700",
      },
      {
        variant: "soft",
        color: "green",
        className:
          "bg-green-100 text-green-900 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800",
      },
      {
        variant: "outline",
        color: "green",
        className:
          "text-green-700 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-900",
      },
      {
        variant: "ghost",
        color: "green",
        className:
          "text-green-700 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-900",
      },
      {
        variant: "link",
        color: "green",
        className:
          "text-green-700 hover:text-green-900 dark:text-green-300 dark:hover:text-green-100",
      },
      {
        variant: "filled",
        color: "emerald",
        className: "hover:bg-emerald-600 dark:hover:bg-emerald-700",
      },
      {
        variant: "soft",
        color: "emerald",
        className:
          "bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800",
      },
      {
        variant: "outline",
        color: "emerald",
        className:
          "text-emerald-700 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-900",
      },
      {
        variant: "ghost",
        color: "emerald",
        className:
          "text-emerald-700 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-900",
      },
      {
        variant: "link",
        color: "emerald",
        className:
          "text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-100",
      },
      {
        variant: "filled",
        color: "teal",
        className: "hover:bg-teal-600 dark:hover:bg-teal-700",
      },
      {
        variant: "soft",
        color: "teal",
        className:
          "bg-teal-100 text-teal-900 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100 dark:hover:bg-teal-800",
      },
      {
        variant: "outline",
        color: "teal",
        className:
          "text-teal-700 hover:bg-teal-100 dark:text-teal-300 dark:hover:bg-teal-900",
      },
      {
        variant: "ghost",
        color: "teal",
        className:
          "text-teal-700 hover:bg-teal-100 dark:text-teal-300 dark:hover:bg-teal-900",
      },
      {
        variant: "link",
        color: "teal",
        className:
          "text-teal-700 hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-100",
      },
      {
        variant: "filled",
        color: "cyan",
        className: "hover:bg-cyan-600 dark:hover:bg-cyan-700",
      },
      {
        variant: "soft",
        color: "cyan",
        className:
          "bg-cyan-100 text-cyan-900 hover:bg-cyan-200 dark:bg-cyan-900 dark:text-cyan-100 dark:hover:bg-cyan-800",
      },
      {
        variant: "outline",
        color: "cyan",
        className:
          "text-cyan-700 hover:bg-cyan-100 dark:text-cyan-300 dark:hover:bg-cyan-900",
      },
      {
        variant: "ghost",
        color: "cyan",
        className:
          "text-cyan-700 hover:bg-cyan-100 dark:text-cyan-300 dark:hover:bg-cyan-900",
      },
      {
        variant: "link",
        color: "cyan",
        className:
          "text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100",
      },
      {
        variant: "filled",
        color: "sky",
        className: "hover:bg-sky-600 dark:hover:bg-sky-700",
      },
      {
        variant: "soft",
        color: "sky",
        className:
          "bg-sky-100 text-sky-900 hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-100 dark:hover:bg-sky-800",
      },
      {
        variant: "outline",
        color: "sky",
        className:
          "text-sky-700 hover:bg-sky-100 dark:text-sky-300 dark:hover:bg-sky-900",
      },
      {
        variant: "ghost",
        color: "sky",
        className:
          "text-sky-700 hover:bg-sky-100 dark:text-sky-300 dark:hover:bg-sky-900",
      },
      {
        variant: "link",
        color: "sky",
        className:
          "text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100",
      },
      {
        variant: "filled",
        color: "blue",
        className: "hover:bg-blue-600 dark:hover:bg-blue-700",
      },
      {
        variant: "soft",
        color: "blue",
        className:
          "bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800",
      },
      {
        variant: "outline",
        color: "blue",
        className:
          "text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900",
      },
      {
        variant: "ghost",
        color: "blue",
        className:
          "text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900",
      },
      {
        variant: "link",
        color: "blue",
        className:
          "text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100",
      },
      {
        variant: "filled",
        color: "indigo",
        className: "hover:bg-indigo-600 dark:hover:bg-indigo-700",
      },
      {
        variant: "soft",
        color: "indigo",
        className:
          "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800",
      },
      {
        variant: "outline",
        color: "indigo",
        className:
          "text-indigo-700 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:bg-indigo-900",
      },
      {
        variant: "ghost",
        color: "indigo",
        className:
          "text-indigo-700 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:bg-indigo-900",
      },
      {
        variant: "link",
        color: "indigo",
        className:
          "text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-100",
      },
      {
        variant: "filled",
        color: "violet",
        className: "hover:bg-violet-600 dark:hover:bg-violet-700",
      },
      {
        variant: "soft",
        color: "violet",
        className:
          "bg-violet-100 text-violet-900 hover:bg-violet-200 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-violet-800",
      },
      {
        variant: "outline",
        color: "violet",
        className:
          "text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900",
      },
      {
        variant: "ghost",
        color: "violet",
        className:
          "text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900",
      },
      {
        variant: "link",
        color: "violet",
        className:
          "text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-100",
      },
      {
        variant: "filled",
        color: "purple",
        className: "hover:bg-purple-600 dark:hover:bg-purple-700",
      },
      {
        variant: "soft",
        color: "purple",
        className:
          "bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800",
      },
      {
        variant: "outline",
        color: "purple",
        className:
          "text-purple-700 hover:bg-purple-100 dark:text-purple-300 dark:hover:bg-purple-900",
      },
      {
        variant: "ghost",
        color: "purple",
        className:
          "text-purple-700 hover:bg-purple-100 dark:text-purple-300 dark:hover:bg-purple-900",
      },
      {
        variant: "link",
        color: "purple",
        className:
          "text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-100",
      },
      {
        variant: "filled",
        color: "fuchsia",
        className: "hover:bg-fuchsia-600 dark:hover:bg-fuchsia-700",
      },
      {
        variant: "soft",
        color: "fuchsia",
        className:
          "bg-fuchsia-100 text-fuchsia-900 hover:bg-fuchsia-200 dark:bg-fuchsia-900 dark:text-fuchsia-100 dark:hover:bg-fuchsia-800",
      },
      {
        variant: "outline",
        color: "fuchsia",
        className:
          "text-fuchsia-700 hover:bg-fuchsia-100 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900",
      },
      {
        variant: "ghost",
        color: "fuchsia",
        className:
          "text-fuchsia-700 hover:bg-fuchsia-100 dark:text-fuchsia-300 dark:hover:bg-fuchsia-900",
      },
      {
        variant: "link",
        color: "fuchsia",
        className:
          "text-fuchsia-700 hover:text-fuchsia-900 dark:text-fuchsia-300 dark:hover:text-fuchsia-100",
      },
      {
        variant: "filled",
        color: "pink",
        className: "hover:bg-pink-600 dark:hover:bg-pink-700",
      },
      {
        variant: "soft",
        color: "pink",
        className:
          "bg-pink-100 text-pink-900 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-100 dark:hover:bg-pink-800",
      },
      {
        variant: "outline",
        color: "pink",
        className:
          "text-pink-700 hover:bg-pink-100 dark:text-pink-300 dark:hover:bg-pink-900",
      },
      {
        variant: "ghost",
        color: "pink",
        className:
          "text-pink-700 hover:bg-pink-100 dark:text-pink-300 dark:hover:bg-pink-900",
      },
      {
        variant: "link",
        color: "pink",
        className:
          "text-pink-700 hover:text-pink-900 dark:text-pink-300 dark:hover:text-pink-100",
      },
      {
        variant: "filled",
        color: "rose",
        className: "hover:bg-rose-600 dark:hover:bg-rose-700",
      },
      {
        variant: "soft",
        color: "rose",
        className:
          "bg-rose-100 text-rose-900 hover:bg-rose-200 dark:bg-rose-900 dark:text-rose-100 dark:hover:bg-rose-800",
      },
      {
        variant: "outline",
        color: "rose",
        className:
          "text-rose-700 hover:bg-rose-100 dark:text-rose-300 dark:hover:bg-rose-900",
      },
      {
        variant: "ghost",
        color: "rose",
        className:
          "text-rose-700 hover:bg-rose-100 dark:text-rose-300 dark:hover:bg-rose-900",
      },
      {
        variant: "link",
        color: "rose",
        className:
          "text-rose-700 hover:text-rose-900 dark:text-rose-300 dark:hover:text-rose-100",
      },
    ],
    defaultVariants: {
      variant: "filled",
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
