import { OrSeparator } from "@/features/auth/components/or-separator";
import { EmailSignInForm } from "@/features/auth/modules/email-sign-in-form";
import { SocialSignInForm } from "@/features/auth/modules/social-sign-in-form";

export default function SignIn() {
  return (
    <>
      <EmailSignInForm />
      <OrSeparator />
      <SocialSignInForm />
    </>
  );
}
