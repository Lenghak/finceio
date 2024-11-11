import { Box } from "@packages/shadcn/components/box";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@packages/shadcn/components/card";

import { type HTMLAttributes, memo } from "react";

import {
  Logo,
  LogoDarkNoBackground,
  type LogoImageProps,
  LogoLightNoBackground,
  type LogoProps,
} from "@/components/core/logo";
import { cn } from "@/lib/utils";
import {
  ThemesDropdownMenu,
  ThemesTrigger,
} from "@packages/core/components/themes-toggle";

export const AuthCard = memo(
  ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <Card
      className={cn("relative w-full max-w-sm", className)}
      {...props}
    >
      <Box className="absolute top-0 right-0 size-fit [&>button]:rounded-none [&>button]:rounded-se-lg [&>button]:rounded-es-lg">
        <ThemesDropdownMenu>
          <ThemesTrigger
            className="rounded-lg border border-t-0 border-r-0"
            variant="soft"
          />
        </ThemesDropdownMenu>
      </Box>
      {children}
    </Card>
  ),
);
AuthCard.displayName = "AuthCard";

export const AuthCardHeader = memo(
  ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <CardHeader
      className={cn("items-center justify-center text-center", className)}
      {...props}
    >
      {children}
    </CardHeader>
  ),
);
AuthCardHeader.displayName = "AuthCardHeader";

export const AuthCardTitle = memo(
  ({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <CardTitle
      className={cn("font-bold text-3xl", className)}
      {...props}
    >
      {children}
    </CardTitle>
  ),
);
AuthCardTitle.displayName = "AuthCardTitle";

export const AuthCardDescription = memo(
  ({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <CardDescription
      className={cn(className)}
      {...props}
    >
      {children}
    </CardDescription>
  ),
);
AuthCardTitle.displayName = "AuthCardTitle";

export const AuthCardLogo = memo(
  ({
    className,
    width = 48,
    height = 48,
    ...props
  }: LogoProps & Omit<LogoImageProps, "src" | "alt">) => (
    <Logo
      className={cn(
        "m-2 aspect-square overflow-hidden rounded-full",
        className,
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    >
      <LogoDarkNoBackground
        className="absolute opacity-0 transition-all dark:opacity-100"
        height={height}
        width={width}
      />

      <LogoLightNoBackground
        className="absolute opacity-100 transition-all dark:opacity-0"
        height={height}
        width={width}
      />
    </Logo>
  ),
);

export const AuthCardContent = memo(
  ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <CardContent {...props}>{children}</CardContent>
  ),
);
AuthCardContent.displayName = "AuthCardContent";

export const AuthCardFooter = memo(
  ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <CardFooter {...props}>{children}</CardFooter>
  ),
);
AuthCardFooter.displayName = "AuthCardFooter";