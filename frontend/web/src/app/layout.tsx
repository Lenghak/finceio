import { display, mono, sans, serif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { RouteProgressProvider } from "@/providers/route-progress-provider";
import { SessionProvider } from "@/providers/session-provider";
import { ThemeProvider } from "@/providers/themes-provider";
import { DotPattern } from "@packages/magic/components/dot-pattern";
import type { Metadata } from "next";
import type React from "react";

import "@packages/shadcn/globals.css";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Finceio",
  metadataBase: new URL("https://www.finceio.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
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
  icons: {
    icon: [
      {
        url: "/svg/logo-color-light-no-background.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/svg/logo-color-dark-no-background.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

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
      <body className={cn("font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <RouteProgressProvider>
            <SessionProvider>
              <QueryClientProvider>
                <DotPattern
                  className={cn(
                    "fill-slate-300 [mask-image:radial-gradient(75dvw_circle_at_center,white,transparent)] dark:fill-slate-600",
                  )}
                />
                <main className="relative z-10 h-full w-full">{children}</main>
              </QueryClientProvider>
            </SessionProvider>
          </RouteProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
