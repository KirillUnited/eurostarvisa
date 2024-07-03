import React from 'react'
import { HeroLinkProps } from './hero.props'
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const HeroLinkBase = ({ href: link, className, children }: LinkProps & React.HTMLAttributes<HTMLAnchorElement>) => {
    const Comp = link ? Link : 'div';

    return (
        <Comp
            href={`${link}`}
            className={cn(
                'flex flex-col items-center gap-2 group scale-100',
                className
            )}
        >
            {children}
        </Comp>
    )
}
function HeroLink({ link, label, image, className }: HeroLinkProps & React.HTMLAttributes<HTMLElement>) {
    return (
        <HeroLinkBase href={`${link}`} className={className}>
            {image &&
                <Image
                    width={60}
                    height={60}
                    src={`${image}`}
                    alt={label || 'StarVisa'}
                    className='transition-all group-hover:scale-125'
                />
            }
            <p className='paragraph text-center'>{label}</p>
        </HeroLinkBase>
    )
}

export default HeroLink