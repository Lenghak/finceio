"use client";

import { type ComponentPropsWithoutRef, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Flex } from "@packages/shadcn/components/flex";

import { cn } from "@/lib/utils";

import { OAuthButton } from "@/features/auth/components/oauth-button";

import {
  type SocialSignInPipe,
  SocialSignInResolver,
} from "@/features/auth/pipes/sign-in-validations";
import { useSignIn } from "@/services/auth/hooks";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

type SocialSignInFormProps = ComponentPropsWithoutRef<"form">;

export function SocialSignInForm({
  className,
  ...props
}: SocialSignInFormProps) {
  const form = useForm<SocialSignInPipe>({
    resolver: SocialSignInResolver,
  });

  const { mutate: signIn, isIdle } = useSignIn();

  const handleSubmit = useCallback(
    (req: SocialSignInPipe) => signIn(req),
    [signIn],
  );

  return (
    <FormProvider {...form}>
      <Flex
        as="form"
        className={cn("gap-4", className)}
        direction="col"
        items="center"
        justify="center"
        onSubmit={form.handleSubmit(handleSubmit)}
        {...props}
      >
        <OAuthButton
          icon={<IconBrandGoogle />}
          onClick={() => form.setValue("provider", "google")}
          type={isIdle ? "submit" : "button"}
        >
          Continue with Google
        </OAuthButton>

        <OAuthButton
          icon={<IconBrandFacebook />}
          onClick={() => form.setValue("provider", "facebook")}
          type={isIdle ? "submit" : "button"}
        >
          Continue with Facebook
        </OAuthButton>

        <OAuthButton
          icon={<IconBrandGithub />}
          onClick={() => form.setValue("provider", "github")}
          type={isIdle ? "submit" : "button"}
        >
          Continue with Github
        </OAuthButton>
      </Flex>
    </FormProvider>
  );
}
