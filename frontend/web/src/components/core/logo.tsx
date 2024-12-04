import type { ImageProps } from "next/image";
import Image from "next/image";

import { type ComponentPropsWithoutRef, memo } from "react";

import { cn } from "@/lib/utils";

export type LogoProps = ComponentPropsWithoutRef<"div">;

export const Logo = memo(({ className, children, ...props }: LogoProps) => (
  <div
    className={cn(
      "relative flex w-fit min-w-fit items-center gap-4",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));

Logo.displayName = "Logo";

export type LogoImageProps = Omit<
  ImageProps & ComponentPropsWithoutRef<"image">,
  "alt"
>;
const LogoImage = memo(({ className, ...props }: LogoImageProps) => (
  <Image
    alt="Logo"
    className={cn("aspect-square", className)}
    {...props}
  />
));
LogoImage.displayName = "LogoImage";

export const LogoDark = memo(({ ...props }: Omit<LogoImageProps, "src">) => (
  <LogoImage
    src="/svg/logo-dark.svg"
    {...props}
  />
));
LogoDark.displayName = "LogoDark";

export const LogoLight = memo(({ ...props }: Omit<LogoImageProps, "src">) => (
  <LogoImage
    src="/svg/logo-light.svg"
    {...props}
  />
));
LogoLight.displayName = "LogoLight";

export type LogoTextProps = ComponentPropsWithoutRef<"span">;
export const LogoText = memo(({ className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "text-pretty font-bold font-display text-lg text-primary",
      className,
    )}
    {...props}
  >
    Finceio
  </span>
));
LogoText.displayName = "LogoText";
