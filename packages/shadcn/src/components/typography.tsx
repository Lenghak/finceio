import { cn } from "@packages/shadcn/lib/utils";
import type { ComponentPropsWithRef } from "react";

export const TypographyH1 = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"h1">) => (
  <h1
    className={cn(
      "scroll-m-20 font-extrabold text-5xl tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

export const TypographyH2 = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"h2">) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight transition-colors first:mt-0",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

export const TypographyH3 = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"h3">) => (
  <h3
    className={cn(
      "scroll-m-20 font-semibold text-2xl tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

export const TypographyH4 = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"h4">) => (
  <h4
    className={cn(
      "scroll-m-20 font-semibold text-xl tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

export const TypographyH5 = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"h5">) => (
  <h5
    className={cn(
      "scroll-m-20 font-semibold text-lg tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h5>
);

export const TypographyH6 = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"h6">) => (
  <h6
    className={cn(
      "scroll-m-20 font-semibold text-base tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h6>
);

export const TypographyP = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"p">) => (
  <p
    className={cn("not-first:mt-6 leading-7", className)}
    {...props}
  >
    {children}
  </p>
);

export const TypographyBlockquote = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"blockquote">) => (
  <blockquote
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  >
    {children}
  </blockquote>
);

export const TypographyCode = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"code">) => (
  <code
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
      className,
    )}
    {...props}
  >
    {children}
  </code>
);

export const TypographyLead = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"p">) => (
  <p
    className={cn("text-muted-foreground text-xl", className)}
    {...props}
  >
    {children}
  </p>
);

export const TypographyLarge = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("font-semibold text-lg", className)}
    {...props}
  >
    {children}
  </div>
);

export const TypographySmall = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"small">) => (
  <small
    className={cn("font-medium text-sm leading-none", className)}
    {...props}
  >
    {children}
  </small>
);

export const TypographyMuted = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"p">) => (
  <p
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  >
    {children}
  </p>
);

export const TypographyEm = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"em">) => (
  <em
    className={cn("italic", className)}
    {...props}
  >
    {children}
  </em>
);

export const TypographyStrong = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"strong">) => (
  <strong
    className={cn("font-bold", className)}
    {...props}
  >
    {children}
  </strong>
);
