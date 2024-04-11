import { cn } from '@/lib/utils'
import React from 'react'

function SectionHeading({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div
            className={cn(
                'section-heading',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default SectionHeading