"use client";

import { cn } from "@/lib/utils";
import { Button } from "@packages/shadcn/components/button";
import { Flex, type FlexProps } from "@packages/shadcn/components/flex";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const ErrorCta = React.memo(
  ({ className, ...props }: Omit<FlexProps, "children">) => {
    const { back } = useRouter();

    return (
      <Flex
        className={cn("gap-4", className)}
        items="center"
        justify="center"
        {...props}
      >
        <Button
          className="[&_svg]:mr-2 [&_svg]:size-4"
          color="amber"
          onClick={back}
          variant="solid"
        >
          <span>Previous</span>
        </Button>

        <Button
          asChild={true}
          className="[&_svg]:size-4"
          color="amber"
          variant="soft"
        >
          <Link href="/">
            <span>Go back home</span>
          </Link>
        </Button>
      </Flex>
    );
  },
);
