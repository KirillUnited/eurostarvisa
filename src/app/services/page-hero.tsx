'use client'
import { HeroDescription, HeroTitle } from '@/components/shared/hero'
import HeroFooter from '@/components/shared/hero/hero-footer'
import { site } from '@/content'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

function ServicePageHero() {
    return (
        <section id='service-hero' className=''>
            <div className={`container`}>
                <div className={`section-inner relative`}>
                    <div className='relative flex flex-col lg:min-h-[730px]'>
                        <BgLeft className='bg-primary -z-10 bottom-[-190px] md:bottom-[-650px] left-[-60px] md:left-[-300px]' />
                        <div className='section-heading max-w-60 md:max-w-96 lg:max-w-xl'>
                            <HeroTitle>
                                {site.visa.hero.title}
                            </HeroTitle>
                            <p
                                className='font-bold text-sm md:text-2xl lg:text-4xl mt-0'
                            >
                                {site.visa.hero.subtitle}
                            </p>
                            <HeroDescription
                                className='text-foreground/60 lg:text-2xl'
                                dangerouslySetInnerHTML={{ __html: site.visa.hero.description }}
                            />
                        </div>
                        <div className='relative section-body flex flex-col flex-1 max-w-56 lg:max-w-full self-center lg:self-start'>
                            <HeroFooter className='mt-auto lg:mt-auto' />
                        </div>
                    </div>
                    <BgRight className='grid place-items-center -z-10 top-[20px] md:top-[-50px] right-[-170px] md:right-[-350px]'>
                        <MainImage
                            src={site.visa.hero.image}
                            width={300}
                            height={300}
                            alt={site.visa.hero.title}
                            className='relative z-20'
                        />
                        <BgRightTop className='bg-secondary z-10' />
                        <BgRightBottom className='bg-primary z-0'/>
                    </BgRight>
                </div>
            </div>
        </section>
    )
}

const BgLeft = styled.div`
    --size: clamp(150px, 60vw, 600px);

    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: clamp(10px, 3vw, 30px);
    transform: rotate(45deg) translate(-100%, 0%);
`
const BgRight = styled.div`
    --size: clamp(200px, 70vw, 700px);

    position: absolute;
    width: var(--size);
    height: var(--size);
`
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

export default ServicePageHero