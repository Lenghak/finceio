"use client";

import { ErrorCta } from "@/components/core/error-cta";
import { Status } from "@packages/core/components/status";
import { Container } from "@packages/shadcn/components/container";
import { UnplugIcon } from "lucide-react";

export default function GlobalError() {
  return (
    <Container
      className="h-full"
      maxWidth="xs"
    >
      <Status
        description="Looks like there was a problem on our end. Hang tight! We are fixing this as fast as possible."
        icon={
          <UnplugIcon className="size-36 fill-primary/10 stroke-1 stroke-primary" />
        }
        title="Internal Server Error"
      >
        <ErrorCta />
      </Status>
    </Container>
  );
}
