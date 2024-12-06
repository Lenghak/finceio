import { AuthCard } from "@/features/auth/components/auth-card";
import { TermsPrivacyLinks } from "@/features/auth/components/terms-links";
import { Container } from "@packages/shadcn/components/container";
import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container className="relative flex h-full flex-col items-center justify-center">
      <AuthCard>{children}</AuthCard>
      <TermsPrivacyLinks className="absolute bottom-6" />
    </Container>
  );
}
