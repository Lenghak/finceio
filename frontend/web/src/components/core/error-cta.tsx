"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@packages/shadcn/components/button";
import { Flex, type FlexProps } from "@packages/shadcn/components/flex";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ErrorCta({ ...props }: Omit<FlexProps, "children">) {
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
        icon={ArrowLeftIcon}
        iconPlacement="left"
        onClick={back}
        variant="filled"
      >
        <span>Previous</span>
      </Button>

      <Link
        className={cn(
          buttonVariants({ variant: "filled", color: "secondary" }),
        )}
        href="/"
      >
        <span>Go back home</span>
        <ArrowRightIcon className="ml-2 size-4" />
      </Link>
    </Flex>
  );
}
