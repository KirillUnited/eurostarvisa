import { HeroDescription, HeroLink, HeroTitle } from '@/components/shared/hero'
import HeroFooter from '@/components/shared/hero/hero-footer'
import ServiceTypeLink from '@/components/shared/service/ServiceTypeLink'
import { site } from '@/content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css';

const MOCK_DATA = site.visa.hero;

const SectionHeading = () => {
    return (
        <div className='section-heading max-w-60 md:max-w-96 lg:max-w-xl'>
            <HeroTitle>
                {MOCK_DATA.title}
            </HeroTitle>
            {MOCK_DATA.subtitle &&
                <p className='font-bold text-sm md:text-2xl lg:text-4xl mt-0'>
                    {MOCK_DATA.subtitle}
                </p>
            }
            {MOCK_DATA.description &&
                <HeroDescription
                    className='text-foreground/60 lg:text-2xl'
                    dangerouslySetInnerHTML={{ __html: MOCK_DATA.description }}
                />
            }
        </div>
    )
}
const SectionBody = () => {
    return (
        <div className='relative section-body flex flex-col gap-6 md:gap-12 flex-1 max-w-56 lg:max-w-full self-center lg:self-stretch'>
            {MOCK_DATA.links.length > 0 &&
                <ul className={cn(
                    "grid",
                    styles.HeroLinkList
                )}>
                    {
                        MOCK_DATA.links.map((item, index) => {
                            return (
                                <HeroLink key={index} {...item} className='max-w-full' />
                            )
                        })
                    }
                </ul>
            }
            {MOCK_DATA.type_links.length > 0 &&
                <ul className={cn(
                    "grid",
                    styles.HeroLinkList
                )}>
                    {
                        MOCK_DATA.type_links.map((item, index) => {
                            return (
                                <ServiceTypeLink key={index} {...item} />
                            )
                        })
                    }
                </ul>
            }
            <HeroFooter className='mt-auto lg:mt-auto' />
        </div>
    )
}

function ServicePageHero() {
    return (
        <section id='service-hero' className={cn(
            'section'
        )}>
            <div className={`container`}>
                <div className={`section-inner relative`}>
                    <div className='relative flex flex-col lg:min-h-[730px]'>
                        <div className={cn(
                            'absolute',
                            styles.BgLeft
                        )} />
                        <SectionHeading />
                        <SectionBody />
                    </div>
                    <div className={cn(
                        'absolute',
                        styles.BgRight
                    )}>
                        {MOCK_DATA.image &&
                            <Image
                                src={MOCK_DATA.image}
                                width={300}
                                height={300}
                                alt={MOCK_DATA.title}
                                className={cn(
                                    'relative z-20',
                                    styles.MainImage
                                )}
                            />
                        }
                        <div className={cn(
                            'bg-secondary z-10',
                            styles['bg-figure'],
                            styles.BgRightTop
                        )} />
                        <div className={cn(
                            'bg-primary z-0',
                            styles['bg-figure'],
                            styles.BgRightBottom
                        )} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServicePageHero