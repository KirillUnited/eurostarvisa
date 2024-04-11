import { cn } from '@/lib/utils'
import React from 'react'

function SectionBase({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn(
                'section',
                className
            )}
            {...props}
        >
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default SectionBase