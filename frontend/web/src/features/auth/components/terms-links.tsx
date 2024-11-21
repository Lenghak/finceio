import Link from "next/link";

import type { ComponentPropsWithoutRef } from "react";

import { buttonVariants } from "@packages/shadcn/components/button";
import { TypographyMuted } from "@packages/shadcn/components/typography";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const linkCls = cva("bg-transparent font-bold focus-visible:ring-offset-0");

export function TermsPrivacyLinks({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <TypographyMuted
      className={cn("max-w-xs text-center", className)}
      {...props}
    >
      By signing in, you are agreed to our
      <Link
        className={cn(
          buttonVariants({
            size: "xs",
            color: "secondary",
            variant: "link",
          }),
          linkCls(),
        )}
        href="/terms"
      >
        Terms of Service
      </Link>
      and our
      <a
        className={cn(
          buttonVariants({
            size: "xs",
            color: "secondary",
            variant: "link",
          }),
          linkCls(),
        )}
        href="/privacy"
      >
        Privacy Policy
      </a>
    </TypographyMuted>
  );
}
