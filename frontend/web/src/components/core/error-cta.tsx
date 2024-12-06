"use client";

import { Button } from "@packages/shadcn/components/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { type ComponentPropsWithoutRef } from "react";

export const ErrorCta = React.memo(
  ({ ...props }: Omit<ComponentPropsWithoutRef<"div">, "children">) => {
    const { back } = useRouter();

    return (
      <div
        className="flex flex-row items-center justify-between gap-4"
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
      </div>
    );
  },
);
