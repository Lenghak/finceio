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
          className="[&_svg]:mr-2 [&_svg]:size-4"
          color="default"
          onClick={back}
          variant="filled"
        >
          <ArrowLeftIcon />
          <span>Previous</span>
        </Button>

        <Button
          asChild={true}
          className="[&_svg]:size-4"
          color="secondary"
          effect="expandIcon"
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
