import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroProps } from './hero.props'
import HeroFooter from './hero-footer'

const HeroSection = (
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
                    <div className={cn(styles.content)}>
                        {children}
                        {
                            CTASection &&
                            <HeroFooter />
                        }
                    </div>
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

export default HeroSection