'use client'
import React from 'react'
import styled from 'styled-components';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import { cn } from '@/lib/utils';
interface ItemProps {
    thumbnail?: string, title?: string
}
interface Props {
    list: ItemProps[]
}
function DocsList({ list }: Props) {
    return (
        <List className='grid'>
            {
                list?.map(({ thumbnail, title }: ItemProps) => {
                    return (
                        <Card
                            key={title}
                            className={cn(
                                'flex flex-col text-center',
                                'shadow-md hover:shadow-2xl transition-all duration-300'
                            )}
                        >
                            <ImageWrap>
                                <Image
                                    src={`${thumbnail}`}
                                    width={45}
                                    height={45}
                                    alt={`${title}` || ''}
                                    className='object-contain object-center aspect-square mx-auto'
                                />
                            </ImageWrap>
                            <CardHeader>
                                <CardTitle className='text-sm lg:text-lg'>{title}</CardTitle>
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
const ImageWrap = styled.div`
    display: grid;
    place-items: center;
    width: clamp(68px, 15vw, 150px);
    height: clamp(68px, 15vw, 150px);
    margin-inline: auto;
    &>img {
        width: clamp(22px, 4.5vw, 45px);
    }
`;

export default DocsList