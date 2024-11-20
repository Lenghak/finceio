"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { useMemo } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return useMemo(
    () => <NextThemesProvider {...props}>{children}</NextThemesProvider>,
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [props, children],
  );
}
