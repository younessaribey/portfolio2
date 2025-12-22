import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25",
                secondary:
                    "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600",
                ghost:
                    "text-gray-400 hover:text-white hover:bg-gray-800",
                outline:
                    "border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600",
                link: "text-purple-400 underline-offset-4 hover:underline hover:text-purple-300",
            },
            size: {
                default: "h-11 px-6 py-3",
                sm: "h-9 px-4 py-2 text-sm",
                lg: "h-12 px-8 py-4 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
