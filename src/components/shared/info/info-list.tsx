'use client'
import React from 'react'
import styled from 'styled-components';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import { site } from '@/content'

function InfoList() {
    return (
        <List className='grid gap-5 md:gap-10 lg:gap-5'>
            {
                site.home.info.list.map(({ thumbnail, title, description }) => {
                    return (
                        <li
                            key={title}
                        >
                            <Card
                                className='sm:grid grid-cols-[168px,_1fr] shadow-md hover:shadow-2xl transition-all duration-300 h-full'
                            >
                                <CardHeader>
                                    <Image
                                        src={`${thumbnail}`}
                                        width={120}
                                        height={120}
                                        alt={`${title}` || ''}
                                        className='aspect-square object-contain object-center mx-auto'
                                    />
                                </CardHeader>
                                <div className='flex flex-col'>
                                    <CardHeader>
                                        <CardTitle className='text-base'>{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className='flex-1 prose text-sm' dangerouslySetInnerHTML={{ __html: description }} />
                                    <CardFooter>
                                        <Button variant={'outline'} className='w-full'>Подробнее</Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        </li>
                    )
                })
            }
        </List>
    )
}

const List = styled.ul`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export default InfoList