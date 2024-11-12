import { cn } from "@/lib/utils";
import { Flex, type FlexProps } from "@packages/shadcn/components/flex";
import { Separator } from "@packages/shadcn/components/separator";
import { TypographyMuted } from "@packages/shadcn/components/typography";

export function OrSeparator({
  className,
  ...props
}: Omit<FlexProps, "children">) {
  return (
    <Flex
      className={cn(
        "grid grid-cols-[1fr_auto_1fr] grid-rows-1 gap-4 overflow-hidden text-center",
        className,
      )}
      items="center"
      justify="center"
      {...props}
    >
      <Separator />
      <TypographyMuted>Or</TypographyMuted>
      <Separator />
    </Flex>
  );
}
