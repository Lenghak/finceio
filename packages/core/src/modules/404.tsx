import { type HTMLAttributes, forwardRef } from "react";

export type NotFoundProps = HTMLAttributes<HTMLDivElement>;

export const NotFound = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <section
    className="flex min-h-screen w-full flex-col space-y-6 text-center"
    ref={ref}
    {...props}
  >
    {children}
  </section>
));
