import { cn } from "@/lib/utils"

import { sans } from "@/app/fonts"
import { QueryClientProvider } from "@/providers/queryclient-provider"
import { ThemeProvider } from "@/providers/themes-provider"
import { SessionProvider } from "next-auth/react"

import "@packages/shadcn/globals.css"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Home | Persistio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Bling-io" />
        <meta property="og:title" content="Home | Persistio" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/svg/logo-light-background.svg" />
        <meta property="og:url" content="https://www.persistio.com" />
        <meta name="twitter:title" content="Home | Persistio" />
        <meta name="twitter:description" content="" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/svg/logo-light-background.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/svg/logo-dark-background.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={cn(sans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <QueryClientProvider>{children}</QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
