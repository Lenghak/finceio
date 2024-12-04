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

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AuthCardHeader className="text-center">
        <AuthCardLogo />
        <AuthCardTitle>Create an Account</AuthCardTitle>
        <AuthCardDescription>
          Happy to see you . Let&apos;s get you started.
        </AuthCardDescription>
      </AuthCardHeader>

      <AuthCardContent className="space-y-4">{children}</AuthCardContent>
      <AuthCardFooter className="flex items-center justify-center text-muted-foreground text-sm">
        Already have an account?
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
          href="/auth/sign-in"
        >
          Sign In
        </Link>
      </AuthCardFooter>
    </>
  );
}
