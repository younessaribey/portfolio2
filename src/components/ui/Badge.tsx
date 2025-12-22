import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-gray-800 text-gray-300 border border-gray-700",
                security: "bg-red-900/30 text-red-400 border border-red-800/50",
                frontend: "bg-blue-900/30 text-blue-400 border border-blue-800/50",
                backend: "bg-green-900/30 text-green-400 border border-green-800/50",
                database: "bg-yellow-900/30 text-yellow-400 border border-yellow-800/50",
                tool: "bg-purple-900/30 text-purple-400 border border-purple-800/50",
                outline: "border border-gray-600 text-gray-400",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
