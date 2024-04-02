import React from 'react'
import { HeroLinkProps } from './hero.props'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function HeroLink({ link, label, image }: HeroLinkProps) {
    return (
        <Link
            href={`${link}`}
            className={cn(
                'flex flex-col items-center gap-2 max-w-12 md:max-w-full'
            )}
        >
            {image &&
                <Image
                    width={60}
                    height={60}
                    src={`${image}`}
                    alt={label || 'StarVisa'}
                />
            }
            <p className='text-xs'>{label}</p>
        </Link>
    )
}

export default HeroLink