'use client'
import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroProps } from './hero.props'
import styled from 'styled-components'
import HeroFooter from './hero-footer'

const Hero = (
    {
        title = 'Hero title',
        image = '/images/hero.png',
        CTASection,
        children
    }: HeroProps) => {
    return (
        <section id='hero'>
            <div className={`container`}>
                <div className={`section-inner ${styles.inner}`}>
                    <HeroContent className={cn(
                        'flex flex-col gap-4 md:gap-6',
                        'max-w-[85%] md:max-w-full lg:basis-[45%]',
                    )}>
                        {children}
                        {
                            CTASection &&
                            <HeroFooter />
                        }
                    </HeroContent>
                    {image &&
                        <Image
                            src={image}
                            width={638}
                            height={360}
                            alt={title || ''}
                            className={`${styles.image}`}
                            priority
                            quality={75}
                        />
                    }
                </div>
            </div>
        </section>
    )
}

export const HeroContent = styled.div`
    z-index: 10;
    align-self: center;
`;



export default Hero