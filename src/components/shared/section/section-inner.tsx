import { cn } from '@/lib/utils'
import React from 'react'

function SectionInner({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div
            className={cn(
                'section-inner',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default SectionInner