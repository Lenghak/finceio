import { display, mono, sans, serif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { SessionProvider } from "@/providers/session-provider";
import { ThemeProvider } from "@/providers/themes-provider";
import { DotPattern } from "@packages/magic/components/dot-pattern";
import type React from "react";

import "@packages/shadcn/globals.css";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        sans.variable,
        serif.variable,
        mono.variable,
        display.variable,
      )}
      lang="en"
      suppressHydrationWarning={true}
    >
      <head>
        <title>Finceio</title>
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
          content="Finceio"
          property="og:title"
        />
        <meta
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
          property="og:description"
        />
        <meta
          content="/svg/logo-dark-no-background.svg"
          property="og:image"
        />
        <meta
          content="https://www.finceio.com"
          property="og:url"
        />
        <meta
          content="Finceio"
          name="twitter:title"
        />
        <meta
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
          name="twitter:description"
        />
        <link
          href="/svg/logo-light-with-background.svg"
          media="(prefers-color-scheme: light)"
          rel="icon"
          type="image/svg+xml"
        />
        <link
          href="/svg/logo-dark-with-background.svg"
          media="(prefers-color-scheme: dark)"
          rel="icon"
          type="image/svg+xml"
        />
      </head>
      <body className={cn("font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <SessionProvider>
            <QueryClientProvider>
              <DotPattern
                className={cn(
                  "fill-zinc-300 [mask-image:radial-gradient(75dvw_circle_at_center,white,transparent)] dark:fill-zinc-600",
                )}
              />
              <main className="relative z-10 h-full w-full">{children}</main>
            </QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
