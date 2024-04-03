import { cn } from '@/lib/utils'
import { PhoneCallIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type PhoneCallProps = {
    phone?: string,
    label?: string
}

export default function PhoneCall({ phone, label }: PhoneCallProps): React.JSX.Element {
    return (
        <Link href={`${phone || 'tel:'}`} className={cn('group inline-flex gap-4 items-center')}>
            <PhoneCallIcon className='text-primary group-hover:text-primary/70 transition-colors' />
            {label && <span className='font-bold hidden lg:inline'>{label}</span>}
        </Link>
    )
}
