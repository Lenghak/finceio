import {
  Logo,
  LogoDark,
  type LogoImageProps,
  LogoLight,
  type LogoProps,
} from "@/components/core/logo";
import { cn } from "@/lib/utils";
import {
  ThemesDropdownMenu,
  ThemesTrigger,
} from "@packages/core/components/themes-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@packages/shadcn/components/card";
import { type HTMLAttributes, memo } from "react";

export const AuthCard = memo(
  ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <Card
      className={cn("relative w-full max-w-sm", className)}
      {...props}
    >
      <div className="absolute top-0 right-0 size-fit [&>button]:rounded-none [&>button]:rounded-se-lg [&>button]:rounded-es-lg">
        <ThemesDropdownMenu>
          <ThemesTrigger
            className="rounded-lg border border-t-0 border-r-0 dark:bg-background"
            variant="outline"
          />
        </ThemesDropdownMenu>
      </div>
      {children}
    </Card>
  ),
);
AuthCard.displayName = "AuthCard";

export const AuthCardHeader = memo(
  ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <CardHeader
      className={cn("items-center justify-center", className)}
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
      className={cn("font-bold", className)}
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
    width = 52,
    height = 52,
    ...props
  }: LogoProps & Omit<LogoImageProps, "src" | "alt">) => (
    <Logo
      className={cn(
        "mb-6 aspect-square overflow-hidden rounded-full border bg-primary p-1.5",
        className,
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    >
      <LogoLight
        className="hidden dark:flex"
        height={height}
        width={width}
      />

      <LogoDark
        className="dark:hidden"
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
