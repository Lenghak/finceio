"use client";

import { Button } from "@packages/shadcn/components/button";
import { Flex, type FlexProps } from "@packages/shadcn/components/flex";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const ErrorCta = React.memo(
  ({ ...props }: Omit<FlexProps, "children">) => {
    const { back } = useRouter();

    return (
      <Flex
        className="gap-4"
        items="center"
        justify="center"
        {...props}
      >
        <Button
          color="default"
          onClick={back}
          variant="filled"
        >
          <ArrowLeftIcon className="mr-2" />
          <span>Previous</span>
        </Button>

        <Button
          asChild={true}
          color="secondary"
          effect="expandIconRight"
        >
          <Link href="/">
            <span>Go back home</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </Flex>
    );
  },
);
