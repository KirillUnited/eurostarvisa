'use client'
import React from 'react'
import styled from 'styled-components';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import { site } from '@/content'

function StepList() {
    return (
        <List className='grid gap-5 md:gap-10 lg:gap-5'>
            {
                site.home.steps.list.map(({ thumbnail, title, description }) => {
                    return (
                        <li
                            key={title}
                            className='pt-10'
                        >
                            <Card
                                className='relative flex flex-col border-foreground'
                            >
                                <Image
                                    src={`${thumbnail}`}
                                    width={80}
                                    height={80}
                                    alt={`${title}` || ''}
                                    className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square object-contain object-center mx-auto'
                                />
                                <CardHeader className='pt-20'>
                                    <CardTitle className='text-xs md:text-base text-center'>{title}</CardTitle>
                                </CardHeader>
                                <CardContent className='flex-1 prose' dangerouslySetInnerHTML={{ __html: description }} />
                            </Card>
                        </li>
                    )
                })
            }
        </List>
    )
}

const List = styled.ul`
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
`;

export default StepList