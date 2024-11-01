import {
  Fira_Code,
  Playfair_Display,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";

export const sans = Source_Sans_3({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-sans",
});

export const serif = Source_Serif_4({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-serif",
});

export const mono = Fira_Code({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-mono",
});

export const display = Playfair_Display({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-display",
});
