"use server";

import {
  auth,
  signIn as authSignIn,
  signOut as authSignOut,
  unstable_update,
} from "@/auth";
import type { Session } from "next-auth";

export const getSession = async () => await auth();

export const updateSession = async (args?: Partial<Session>) =>
  await unstable_update(args ?? {});

export const signIn = async () => await authSignIn();

export const signOut = async () => await authSignOut();
