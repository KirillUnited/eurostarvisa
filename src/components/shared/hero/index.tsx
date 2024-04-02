import React from 'react'
import styles from './styles.module.css'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroProps } from './hero.props'
import { HeroTitle } from './hero-title'
import { HeroDescription } from './hero-description'
import HeroLink from './hero-link'

const Hero = (
    {
        title = 'Hero title',
        subtitle = 'Hero subtitle',
        description = 'Hero description',
        image = '/images/hero.png',
        links = [],
        CTASection
    }: HeroProps) => {
    return (
        <section id='hero'>
            <div className={`container`}>
                <div className={`section-inner ${styles.inner}`}>
                    <div className={`${styles.content}`}>
                        <HeroDescription
                            className='font-bold text-xl md:text-3xl lg:text-4xl md:max-w-[55%] lg:max-w-full'
                            dangerouslySetInnerHTML={{ __html: subtitle }}
                        />
                        {links.length > 0 &&
                            <div className="flex flex-wrap gap-5 md:gap-8 md:max-w-[40%] lg:max-w-full">
                                {
                                    links.map((item) => {
                                        return (
                                            <HeroLink {...item} />
                                        )
                                    })
                                }
                            </div>
                        }
                        <HeroTitle className='text-xl md:text-3xl lg:text-4xl'>
                            {title}
                        </HeroTitle>
                        <HeroDescription
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                        {
                            CTASection &&
                            <div className={`${styles.footer}`}>
                                <Button
                                    className={cn(
                                        'w-full sm:w-fit'
                                    )}
                                >
                                    получить бесплатную консультацию
                                </Button>
                            </div>
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
                        />
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero