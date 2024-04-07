'use client'
import React from 'react'
import styled from 'styled-components';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import { site } from '@/content'
import { cn } from '@/lib/utils';

function DocsMainList() {
    return (
        <List className='grid'>
            {
                site.visa.docs.main.list.map(({ thumbnail, title }) => {
                    return (
                        <Card
                            key={title}
                            className={cn(
                                'flex flex-col text-center',
                                'shadow-md hover:shadow-2xl transition-all duration-300'
                            )}
                        >
                            <Image
                                src={`${thumbnail}`}
                                width={150}
                                height={150}
                                alt={`${title}` || ''}
                                className='object-contain object-center aspect-square mx-auto'
                            />
                            <CardHeader>
                                <CardTitle className='text-sm lg:text-base'>{title}</CardTitle>
                            </CardHeader>
                        </Card>

                    )
                })
            }
        </List>
    )
}

const List = styled.div`
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    gap: clamp(20px, 4vw, 40px);
`;

export default DocsMainList