"use client";
import { Button } from "@packages/shadcn/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@packages/shadcn/components/dropdown-menu";
import { IconDeviceLaptop, IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import type { ComponentPropsWithRef } from "react";

export function ThemesDropdownMenu({
  children,
  ...props
}: ComponentPropsWithRef<typeof DropdownMenu>) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        {...props}
        asChild={true}
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <IconSun />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <IconMoonStars />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <IconDeviceLaptop />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemesTrigger({
  ...props
}: ComponentPropsWithRef<typeof Button>) {
  return (
    <Button
      size="icon"
      variant="outline"
      {...props}
    >
      <IconSun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
      <IconMoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
