import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";