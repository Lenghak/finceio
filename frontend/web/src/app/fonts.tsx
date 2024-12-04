import { IBM_Plex_Mono, IBM_Plex_Serif, Recursive } from "next/font/google";

export const sans = Recursive({
  subsets: ["latin"],
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
});
