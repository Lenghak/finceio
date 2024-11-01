import { cn } from "@packages/shadcn/lib/utils";
import type React from "react";

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

export function TypographyH1({ className, children }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ className, children }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight transition-colors first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ className, children }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 font-semibold text-2xl tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ className, children }: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 font-semibold text-xl tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({ className, children }: TypographyProps) {
  return (
    <h5
      className={cn(
        "scroll-m-20 font-semibold text-lg tracking-tight",
        className,
      )}
    >
      {children}
    </h5>
  );
}

export function TypographyH6({ className, children }: TypographyProps) {
  return (
    <h6
      className={cn(
        "scroll-m-20 font-semibold text-base tracking-tight",
        className,
      )}
    >
      {children}
    </h6>
  );
}

export function TypographyP({ className, children }: TypographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ className, children }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyCode({ className, children }: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function TypographyLead({ className, children }: TypographyProps) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}

export function TypographyLarge({ className, children }: TypographyProps) {
  return (
    <div className={cn("font-semibold text-lg", className)}>{children}</div>
  );
}

export function TypographySmall({ className, children }: TypographyProps) {
  return (
    <small className={cn("font-medium text-sm leading-none", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({ className, children }: TypographyProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
}

export function TypographyEm({ className, children }: TypographyProps) {
  return <em className={cn("italic", className)}>{children}</em>;
}

export function TypographyStrong({ className, children }: TypographyProps) {
  return <strong className={cn("font-bold", className)}>{children}</strong>;
}
