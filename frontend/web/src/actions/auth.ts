"use server";

import {
  auth,
  signIn as authSignIn,
  signOut as authSignOut,
  unstable_update,
} from "@/auth";
import type { OAuthSignInRequest } from "@/types/auth";
import type { Session } from "next-auth";

export const getSession = async () => await auth();

export const updateSession = async (args?: Partial<Session>) =>
  await unstable_update(args ?? {});

export const signIn = async (req: OAuthSignInRequest) =>
  await authSignIn("credentials", req);

export const signOut = async () => await authSignOut();
