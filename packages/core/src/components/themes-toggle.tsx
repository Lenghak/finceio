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
import {
  type KeyboardEvent,
  type MutableRefObject,
  type PointerEvent,
  forwardRef,
  memo,
  useCallback,
  useMemo,
} from "react";

export function ThemesDropdownMenu({ children, ...props }: DropdownMenuProps) {
  const { setTheme } = useTheme();

  return useMemo(
    () => (
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
    ),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [props, setTheme, children],
  );
}

export const ThemesTrigger = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
    const refCallback = useCallback(
      (node: HTMLButtonElement) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as MutableRefObject<HTMLButtonElement | null>).current = node;
        }
      },
      [ref],
    );

    const handlePointerDown = useCallback(
      (event: PointerEvent<HTMLButtonElement>) => {
        if (props.onPointerDown) {
          props.onPointerDown(event);
        }
        // Additional logic if needed
      },
      // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
      [props],
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLButtonElement>) => {
        if (props.onKeyDown) {
          props.onKeyDown(event);
        }
        // Additional logic if needed
      },
      // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
      [props],
    );

    const sunIcon = useMemo(
      () => (
        <SunMediumIcon className="dark:-rotate-90 size-4 rotate-0 scale-100 transition-all dark:scale-0" />
      ),
      [],
    );

    const moonIcon = useMemo(
      () => (
        <MoonStarIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ),
      [],
    );

    return (
      <Button
        color="secondary"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        ref={refCallback}
        size="icon"
        variant="outline"
        {...props}
      >
        {sunIcon}
        {moonIcon}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }),
);

ThemesTrigger.displayName = "ThemesTrigger";
