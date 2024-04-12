import React from 'react'
import { HeroLinkProps } from './hero.props'
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function HeroLink({ link, label, image, className }: HeroLinkProps) {
    const Comp = link ? Link : 'div'
    
    return (
        <Comp
            href={`${link}`}
            className={cn(
                'flex flex-col items-center gap-2 max-w-12 md:max-w-full group scale-100',
                className
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
        </Comp>
    )
}

export default HeroLink