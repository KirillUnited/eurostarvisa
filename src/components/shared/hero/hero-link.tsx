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
                'flex flex-col items-center gap-2 max-w-12 md:max-w-full group scale-100'
            )}
        >
            {image &&
                <Image
                    width={60}
                    height={60}
                    src={`${image}`}
                    alt={label || 'StarVisa'}
                    className='transition-all group-hover:scale-125'
                />
            }
            <p className='text-xs text-center'>{label}</p>
        </Link>
    )
}

export default HeroLink