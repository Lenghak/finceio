import { AuthCard } from "@/features/auth/components/auth-card";
import { TermsPrivacyLinks } from "@/features/auth/components/terms-links";
import { Container } from "@packages/shadcn/components/container";
import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container
      as="section"
      className="flex h-full flex-col items-center justify-center"
    >
      <AuthCard>
        {/* <AuthCardLogo className="mx-auto my-2 mt-8" /> */}
        {children}
      </AuthCard>
      <TermsPrivacyLinks className="absolute bottom-6" />
    </Container>
  );
}
