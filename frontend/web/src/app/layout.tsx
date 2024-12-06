import { mono, sans, serif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { SessionProvider } from "@/providers/session-provider";
import { ThemeProvider } from "@/providers/themes-provider";
import { DotPattern } from "@packages/magic/components/dot-pattern";
import { TooltipProvider } from "@packages/shadcn/components/tooltip";
import type { Metadata } from "next";
import type React from "react";

import "@/app/globals.css";

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Finceio",
  metadataBase: new URL("https://app.finceio.com"),
  description:
    "Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy.",
  keywords:
    "financial management app, budgeting tool, expense tracking, personal finance, savings goals, debt management, financial education, web3 finance, cryptocurrency tracking, financial planning, gamification in finance, money management, smart budgeting, investment tracking, user-friendly finance app, financial goal setting, income tracking, receipt scanning app, DeFi integration, NFT management",
  authors: [{ name: "Bling-io" }],
  openGraph: {
    title: "Finceio",
    description:
      "Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy.",
  },
  twitter: {
    title: "Finceio",
    description:
      "Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(sans.variable, serif.variable, mono.variable)}
      lang="en"
      suppressHydrationWarning={true}
    >
      <head>
        <link
          href="/svg/favicon-light.svg"
          media="(prefers-color-scheme: light)"
          rel="icon"
        />
        <link
          href="/svg/favicon-dark.svg"
          media="(prefers-color-scheme: dark)"
          rel="icon"
        />
      </head>
      <body className={cn("font-sans dark:has-[body]:bg-neutral-50")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={true}
          enableColorScheme={true}
          enableSystem={true}
        >
          <SessionProvider>
            <QueryClientProvider>
              <DotPattern
                className={cn(
                  "fill-neutral-300 [mask-image:radial-gradient(75dvw_circle_at_center,white,transparent)] dark:fill-neutral-800",
                )}
              />
              <TooltipProvider>
                <main className="relative z-10 h-full w-full">{children}</main>
              </TooltipProvider>
            </QueryClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
