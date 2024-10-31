import NextAuth from "next-auth"
import authConfig from "~/auth.config"

export const { auth, handlers, signIn, signOut, unstable_update } =
  NextAuth(authConfig)
