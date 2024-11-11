"use client";

import { type ComponentPropsWithoutRef, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Flex } from "@packages/shadcn/components/flex";

import { cn } from "@/lib/utils";

import { OAuthButton } from "@/features/auth/components/oauth-button";

import {
  type OAuthSignInPipe,
  OAuthSignInResolver,
} from "@/features/auth/pipe/sign-in-validations";
import { useSignIn } from "@/services/auth/hooks";
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

type SignInFormProps = ComponentPropsWithoutRef<"form">;

export function OAuthSignInForm({ className, ...props }: SignInFormProps) {
  const form = useForm<OAuthSignInPipe>({
    resolver: OAuthSignInResolver,
    defaultValues: { provider: "resend", email: "" },
  });

  const { mutate: signIn, isPending } = useSignIn();

  const handleSubmit = useCallback(
    (req: OAuthSignInPipe) => signIn(req),
    [signIn],
  );

  return (
    <FormProvider {...form}>
      <Flex
        as="form"
        className={cn("mx-auto max-w-xs gap-4", className)}
        direction="col"
        items="center"
        justify="center"
        onSubmit={form.handleSubmit(handleSubmit)}
        {...props}
      >
        <OAuthButton
          icon={IconBrandGoogle}
          onClick={() => form.setValue("provider", "google")}
          type={isPending ? "button" : "submit"}
        >
          Continue with Google
        </OAuthButton>

        <OAuthButton
          icon={IconBrandFacebook}
          onClick={() => form.setValue("provider", "facebook")}
          type={isPending ? "button" : "submit"}
        >
          Continue with Facebook
        </OAuthButton>

        <OAuthButton
          icon={IconBrandApple}
          onClick={() => form.setValue("provider", "github")}
          type={isPending ? "button" : "submit"}
        >
          Continue with Apple
        </OAuthButton>

        <OAuthButton
          icon={IconBrandGithub}
          onClick={() => form.setValue("provider", "github")}
          type={isPending ? "button" : "submit"}
        >
          Continue with Github
        </OAuthButton>
      </Flex>
    </FormProvider>
  );
}
