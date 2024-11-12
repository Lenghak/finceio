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

export const LogoLightWithBackground = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-light-with-background.svg"
      {...props}
    />
  ),
);
LogoLightWithBackground.displayName = "LogoLightWithBackground";

export const LogoLightNoBackground = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-light-no-background.svg"
      {...props}
    />
  ),
);
LogoLightNoBackground.displayName = "LogoLightNoBackground";

export const LogoDarkWithBackground = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-dark-with-background.svg"
      {...props}
    />
  ),
);
LogoDarkWithBackground.displayName = "LogoDarkWithBackground";

export const LogoDarkNoBackground = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-dark-no-background.svg"
      {...props}
    />
  ),
);
LogoDarkNoBackground.displayName = "LogoDarkNoBackground";

export const LogoBlackPure = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-black-pure.svg"
      {...props}
    />
  ),
);
LogoBlackPure.displayName = "LogoBlackPure";

export const LogoWhitePure = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-white-pure.svg"
      {...props}
    />
  ),
);
LogoWhitePure.displayName = "LogoBlackWithBackground";

export const LogoColorLightPure = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-color-light-pure.svg"
      {...props}
    />
  ),
);
LogoColorLightPure.displayName = "LogoColorLightPure";

export const LogoColorDarkPure = memo(
  ({ ...props }: Omit<LogoImageProps, "src">) => (
    <LogoImage
      src="/svg/logo-color-dark-pure.svg"
      {...props}
    />
  ),
);
LogoColorDarkPure.displayName = "LogoColorDarkPure";

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
