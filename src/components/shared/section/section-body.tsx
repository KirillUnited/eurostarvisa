import { cn } from '@/lib/utils'
import React from 'react'

function SectionBody({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div
            className={cn(
                'section-body',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default SectionBody