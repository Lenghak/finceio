import { ErrorCta } from "@/components/core/error-cta";
import { Status } from "@packages/core/components/status";
import { Container } from "@packages/shadcn/components/container";
import { TrafficConeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <Container
      className="h-full"
      maxWidth="xs"
    >
      <Status
        description="Looks like you have stumbled across that page that does not exist. You can always find your back down below."
        icon={<TrafficConeIcon />}
        title="Page not Found"
      >
        <ErrorCta />
      </Status>
    </Container>
  );
}
