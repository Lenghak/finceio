"use client";

import { OAuthButton } from "@/features/auth/components/oauth-button";
import {
  type SocialSignInPipe,
  SocialSignInResolver,
} from "@/features/auth/pipes/sign-in-validations";
import { cn } from "@/lib/utils";
import { useSignIn } from "@/services/auth/hooks";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { type ComponentPropsWithoutRef, useCallback, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

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

  const memoizedIconBrandGoogle = useMemo(() => <IconBrandGoogle />, []);
  const memoizedIconBrandFacebook = useMemo(() => <IconBrandFacebook />, []);
  const memoizedIconBrandGithub = useMemo(() => <IconBrandGithub />, []);

  return (
    <FormProvider {...form}>
      <form
        className={cn(
          "flex flex-col items-center justify-center gap-4",
          className,
        )}
        onSubmit={form.handleSubmit(handleSubmit)}
        {...props}
      >
        <OAuthButton
          className="w-full border-input"
          onClick={setGoogleProvider}
          type={isIdle ? "submit" : "button"}
        >
          {memoizedIconBrandGoogle}
          <span>Continue with Google</span>
        </OAuthButton>

        <OAuthButton
          className="w-full border-input"
          onClick={setFacebookProvider}
          type={isIdle ? "submit" : "button"}
        >
          {memoizedIconBrandFacebook}
          <span>Continue with Facebook</span>
        </OAuthButton>

        <OAuthButton
          className="w-full border-input"
          onClick={setGithubProvider}
          type={isIdle ? "submit" : "button"}
        >
          {memoizedIconBrandGithub}
          <span>Continue with Github</span>
        </OAuthButton>
      </form>
    </FormProvider>
  );
}
