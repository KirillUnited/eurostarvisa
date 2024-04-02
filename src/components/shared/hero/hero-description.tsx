import { cn } from "@/lib/utils";

export const HeroDescription = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "paragraph",
            className
        )}
        {...props}
    >
        {children}
    </div>
)