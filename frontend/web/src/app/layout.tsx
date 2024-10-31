import { cn } from "@/lib/utils";

import { sans } from "@/app/fonts";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { SessionProvider } from "@/providers/session-provider";
import { ThemeProvider } from "@/providers/themes-provider";

import "@packages/shadcn/globals.css";
import "@/app/globals.css";
import type React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <head>
        <title>Home | Finceio</title>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
        <meta
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
          name="description"
        />
        <meta
          content="financial management app, budgeting tool, expense tracking, personal finance, savings goals, debt management, financial education, web3 finance, cryptocurrency tracking, financial planning, gamification in finance, money management, smart budgeting, investment tracking, user-friendly finance app, financial goal setting, income tracking, receipt scanning app, DeFi integration, NFT management"
          name="keywords"
        />
        <meta
          content="Bling-io"
          name="author"
        />
        <meta
          content="Home | Finceio"
          property="og:title"
        />
        <meta
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
          property="og:description"
        />
        <meta
          content="/svg/logo-light-background.svg"
          property="og:image"
        />
        <meta
          content="https://www.finceio.com"
          property="og:url"
        />
        <meta
          content="Home | Finceio"
          name="twitter:title"
        />
        <meta
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
          name="twitter:description"
        />
        <link
          href="/svg/logo-light-background.svg"
          media="(prefers-color-scheme: light)"
          rel="icon"
          type="image/svg+xml"
        />
        <link
          href="/svg/logo-dark-background.svg"
          media="(prefers-color-scheme: dark)"
          rel="icon"
          type="image/svg+xml"
        />
      </head>
      <body className={cn(sans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={true}
          enableSystem={true}
        >
          <SessionProvider>
            <QueryClientProvider>{children}</QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
