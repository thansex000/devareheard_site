import React from "react";
// Utility to concatenate class names
function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    color?: string;
}

const sizeMap = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-10 w-10 border-4",
};

export const Loading: React.FC<LoadingProps> = ({
    size = "md",
    color = "border-blue-500",
    className,
    ...props
}) => (
    <div className={cn("flex items-center justify-center", className)} {...props}>
        <span
            className={cn(
                "animate-spin rounded-full border-t-transparent border-solid",
                sizeMap[size],
                color
            )}
            role="status"
            aria-label="Loading"
        />
    </div>
);

export default Loading;