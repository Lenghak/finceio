import { cn } from "@/lib/utils";

import { sans } from "@/app/fonts";
import { QueryClientProvider } from "@/providers/query-client-provider";
import { SessionProvider } from "@/providers/session-provider";
import { ThemeProvider } from "@/providers/themes-provider";

import "@packages/shadcn/globals.css";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Home | Finceio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
        />
        <meta
          name="keywords"
          content="financial management app, budgeting tool, expense tracking, personal finance, savings goals, debt management, financial education, web3 finance, cryptocurrency tracking, financial planning, gamification in finance, money management, smart budgeting, investment tracking, user-friendly finance app, financial goal setting, income tracking, receipt scanning app, DeFi integration, NFT management"
        />
        <meta name="author" content="Bling-io" />
        <meta property="og:title" content="Home | Finceio" />
        <meta
          property="og:description"
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
        />
        <meta property="og:image" content="/svg/logo-light-background.svg" />
        <meta property="og:url" content="https://www.finceio.com" />
        <meta name="twitter:title" content="Home | Finceio" />
        <meta
          name="twitter:description"
          content="Take charge of your finances with Finceio! Our user-friendly app offers expense tracking, budgeting tools, and financial education to help you thrive in today's economy."
        />
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
  );
}
