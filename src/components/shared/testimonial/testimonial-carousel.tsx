'use client';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { testimonials } from '@/content';

export default function TestimonialCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent
                className={cn(
                    ""
                )}>
                {
                    testimonials.list?.map(({ thumbnail, title, description, rating, link }) => {
                        return (
                            <CarouselItem
                                key={title}
                                className={cn(
                                    ""
                                )}
                            >
                                <div className='flex flex-col items-center text-center md:max-w-screen-lg px-12 mx-auto gap-7'>
                                    <Image
                                        src={`${thumbnail}`}
                                        width={50}
                                        height={50}
                                        alt={title}
                                        className='object-contain aspect-square mx-auto'
                                    />
                                    <div className="flex flex-col gap-5">
                                        <p>
                                            {title}
                                            <a href={link} target="_blank" className="text-link">Яндекс</a>
                                        </p>
                                        <p>{rating}</p>
                                        <p className='paragraph'>{description}</p>
                                    </div>
                                </div>
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