"use client";

import { LaptopMinimalIcon, MoonStarIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, type ButtonProps } from "@packages/shadcn/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@packages/shadcn/components/dropdown-menu";
import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { memo } from "react";

export function ThemesDropdownMenu({ children, ...props }: DropdownMenuProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild={true}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="font-semibold"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunMediumIcon />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonStarIcon />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <LaptopMinimalIcon />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const ThemesTrigger = memo(({ ...props }: ButtonProps) => (
  <Button
    color="secondary"
    size="icon"
    variant="outline"
    {...props}
  >
    <SunMediumIcon className="dark:-rotate-90 size-4 rotate-0 scale-100 transition-all dark:scale-0" />
    <MoonStarIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span className="sr-only">Toggle theme</span>
  </Button>
));

ThemesTrigger.displayName = "ThemesTrigger";
