'use client'
import { HeroDescription, HeroLink, HeroTitle } from '@/components/shared/hero'
import HeroFooter from '@/components/shared/hero/hero-footer'
import ServiceTypeLink from '@/components/shared/service/ServiceTypeLink'
import { site } from '@/content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import styles from './styles.module.css';

const MOCK_DATA = site.visa.hero;

function ServicePageHero() {
    return (
        <section id='service-hero' className={cn(
            'section'
        )}>
            <div className={`container`}>
                <div className={`section-inner relative`}>
                    <div className='relative flex flex-col lg:min-h-[730px]'>
                        <div className={cn(
                            styles.BgLeft
                        )} />
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
                        <div className='relative section-body flex flex-col gap-6 md:gap-12 flex-1 max-w-56 lg:max-w-full self-center lg:self-stretch'>
                            {MOCK_DATA.links.length > 0 &&
                                <HeroLinkList className="grid">
                                    {
                                        MOCK_DATA.links.map((item, index) => {
                                            return (
                                                <HeroLinkListItem key={index} {...item} />
                                            )
                                        })
                                    }
                                </HeroLinkList>
                            }
                            {MOCK_DATA.type_links.length > 0 &&
                                <HeroLinkList className="grid">
                                    {
                                        MOCK_DATA.type_links.map((item, index) => {
                                            return (
                                                <ServiceTypeLink key={index} {...item} />
                                            )
                                        })
                                    }
                                </HeroLinkList>
                            }
                            <HeroFooter className='mt-auto lg:mt-auto' />
                        </div>
                    </div>
                    <div className={cn(
                        styles.BgRight
                    )}>
                        {MOCK_DATA.image &&
                            <MainImage
                                src={MOCK_DATA.image}
                                width={300}
                                height={300}
                                alt={MOCK_DATA.title}
                                className='relative z-20'
                            />
                        }
                        <BgRightTop className='bg-secondary z-10' />
                        <BgRightBottom className='bg-primary z-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}
const BgRightTop = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: clamp(10px, 5vw, 50px);
    transform: rotate(45deg);
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
`
const BgRightBottom = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: clamp(10px, 5vw, 50px);
    transform: rotate(60deg);
    z-index: 0;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
`
const MainImage = styled(Image)`
    --size: clamp(150px, 30vw, 300px);

    width: var(--size);
    height: var(--size);
`
const HeroLinkList = styled.ul`
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: clamp(10px, 2.4vw, 24px);
`
const HeroLinkListItem = styled(HeroLink)`
    max-width: 100%;
`
export default ServicePageHero