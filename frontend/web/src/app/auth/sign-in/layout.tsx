import {
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardLogo,
  AuthCardTitle,
} from "@/features/auth/components/auth-card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@packages/shadcn/components/button";
import type { Metadata } from "next";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Sign In | Finceio",
};

export default function SignInLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AuthCardHeader>
        <AuthCardLogo />
        <AuthCardTitle>Sign in to Finceio</AuthCardTitle>
        <AuthCardDescription>
          Glad to see you again! Let&apos;s get started.
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent className="space-y-4">{children}</AuthCardContent>
      <AuthCardFooter className="flex items-center justify-center text-muted-foreground text-sm">
        Don't have an account?
        <Link
          className={cn(
            buttonVariants({
              color: "secondary",
              size: "xs",
              variant: "link",
              effect: "linkHover2",
            }),
            "bg-transparent",
          )}
          href="/auth/sign-up"
        >
          Sign Up
        </Link>
      </AuthCardFooter>
    </>
  );
}
