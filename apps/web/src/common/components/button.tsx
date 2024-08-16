import { Button } from "@packages/ui";
import * as React from "react";

export default function App({
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <Button
      {...props}
      className="rounded-full"
      variant={"outline"}
      onClick={() => console.log("Something")}
    >
      This is a button
    </Button>
  );
}
