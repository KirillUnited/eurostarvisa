'use client';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { FAQ } from '@/content';
import styled from 'styled-components';

export default function FAQCarousel() {
    return (
        <Carousel
            opts={{
                align: "start"
            }}
        >
            <CarouselContent
                className={cn(
                    ""
                )}>
                {
                    FAQ.list?.map(({ thumbnail, title, description }) => {
                        return (
                            <CarouselItem
                                key={title}
                                className={cn(
                                    ""
                                )}
                            >
                                <FAQListItem className='flex flex-col lg:grid md:max-w-screen-lg px-12 mx-auto gap-7'>
                                    <Image
                                        src={`${thumbnail}`}
                                        width={200}
                                        height={200}
                                        alt={title}
                                        className='object-contain aspect-square mx-auto'
                                        quality={100}
                                    />
                                    <div className="flex flex-col gap-5">
                                        <div className="text-base md:text-xl">
                                            <p className='font-bold'>Вопрос:</p>
                                            {title}
                                        </div>
                                        <div className="text-xs md:text-base">
                                            <p className='font-bold'>Ответ:</p>
                                            {description}
                                        </div>
                                    </div>
                                </FAQListItem>
                            </CarouselItem>
                        )
                    }
                    )
                }
            </CarouselContent>

            <CarouselPrevious className='left-0' />
            <CarouselNext className='right-0' />
        </Carousel>
    )
}

const FAQListItem = styled.div`
    grid-template-columns: 200px 1fr;
`