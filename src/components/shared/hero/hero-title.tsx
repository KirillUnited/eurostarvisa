import { cn } from "@/lib/utils";

export const HeroTitle = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
        className={cn(
            "heading-1 lg:tracking-[-0.03em]",
            className
        )}
        {...props}
    >
        {children}
    </h1>
);