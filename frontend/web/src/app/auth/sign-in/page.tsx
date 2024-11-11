import {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardLogo,
  AuthCardTitle,
} from "@/features/auth/components/auth-card";
import { OAuthSignInForm } from "@/features/auth/modules/oauth-sign-in-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@packages/shadcn/components/button";
import Link from "next/link";

export default function SignIn() {
  return (
    <AuthCard>
      <AuthCardHeader>
        <AuthCardLogo
          height={48}
          width={48}
        />
        <AuthCardTitle>Welcome back</AuthCardTitle>
        <AuthCardDescription>
          Choose an option below to get started.
        </AuthCardDescription>
      </AuthCardHeader>
      <AuthCardContent>
        <OAuthSignInForm />
      </AuthCardContent>
      <AuthCardFooter className="flex items-center justify-center text-muted-foreground text-sm">
        Don't have an account?
        <Link
          className={cn(
            buttonVariants({
              color: "secondary",
              size: "sm",
              variant: "link",
              effect: "linkHover1",
            }),
          )}
          href="/auth/sign-up"
        >
          Sign Up
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
