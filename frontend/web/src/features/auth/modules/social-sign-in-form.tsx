"use client";

import { type ComponentPropsWithoutRef, useCallback, useMemo } from "react";
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

  const setGoogleProvider = useCallback(() => {
    form.setValue("provider", "google");
  }, [form.setValue]);

  const setFacebookProvider = useCallback(() => {
    form.setValue("provider", "facebook");
  }, [form.setValue]);

  const setGithubProvider = useCallback(() => {
    form.setValue("provider", "github");
  }, [form.setValue]);

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
          icon={useMemo(() => <IconBrandGoogle />, [])}
          onClick={setGoogleProvider}
          type={isIdle ? "submit" : "button"}
        >
          Continue with Google
        </OAuthButton>

        <OAuthButton
          icon={useMemo(() => <IconBrandFacebook />, [])}
          onClick={setFacebookProvider}
          type={isIdle ? "submit" : "button"}
        >
          Continue with Facebook
        </OAuthButton>

        <OAuthButton
          icon={useMemo(() => <IconBrandGithub />, [])}
          onClick={setGithubProvider}
          type={isIdle ? "submit" : "button"}
        >
          Continue with Github
        </OAuthButton>
      </Flex>
    </FormProvider>
  );
}
