"use client";

import {
  type MagicLinkSignInPipe,
  MagicLinkSignInResovler,
} from "@/features/auth/pipes/sign-in-validations";
import { cn } from "@/lib/utils";
import { useSignIn } from "@/services/auth/hooks";
import { Button } from "@packages/shadcn/components/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
} from "@packages/shadcn/components/form";
import { InputAbsoluteAddon } from "@packages/shadcn/components/input";
import { IconAt, IconLoader3 } from "@tabler/icons-react";
import { type ComponentPropsWithoutRef, useCallback, useMemo } from "react";
import {
  type Control,
  type FieldValues,
  type UseControllerReturn,
  useForm,
} from "react-hook-form";

type EmailSignInFormProps = ComponentPropsWithoutRef<"form">;

export function EmailSignInForm({ className, ...props }: EmailSignInFormProps) {
  const form = useForm<MagicLinkSignInPipe>({
    resolver: MagicLinkSignInResovler,
    defaultValues: {
      email: "",
      provider: "resend",
    },
  });

  const { mutate: signIn, isPending, isIdle } = useSignIn();

  const onSubmit = useCallback(
    (values: MagicLinkSignInPipe) => {
      signIn(values);
    },
    [signIn],
  );

  const memoizedLeftAddon = useMemo(
    () => <IconAt className="dark:size-4 dark:stroke-[3]" />,
    [],
  );
  const memoizedRenderEmailField = useCallback(
    ({ field }: UseControllerReturn) => (
      <FormItem className="transition-all">
        <FormLabel className="sr-only">Email</FormLabel>
        <FormControl>
          <InputAbsoluteAddon
            className="rounded-full"
            leftAddon={memoizedLeftAddon}
            leftSeparator={true}
            placeholder="example@email.com"
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    ),
    [memoizedLeftAddon],
  );

  const memoizedIconLoader3 = useMemo(() => <IconLoader3 />, []);

  return (
    <FormProvider {...form}>
      <form
        className={cn("w-full space-y-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FormField
          control={form.control as unknown as Control<FieldValues>}
          name="email"
          render={memoizedRenderEmailField}
        />
        <Button
          className="w-full gap-2 "
          disabled={!isIdle}
          effect={isPending ? "loading" : "hideIcon"}
          icon={memoizedIconLoader3}
          iconPlacement="right"
          type={isPending ? "button" : "submit"}
        >
          <span>Continue with Email</span>
        </Button>
      </form>
    </FormProvider>
  );
}
