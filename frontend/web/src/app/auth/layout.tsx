import { TermsPrivacyLinks } from "@/features/auth/components/terms-links";
import { Container } from "@packages/shadcn/components/container";
import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container
      as="section"
      className="flex h-full flex-col items-center justify-center"
    >
      {children}
      <TermsPrivacyLinks className="absolute bottom-4" />
    </Container>
  );
}
