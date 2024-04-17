'use client'
import React from 'react'
import styled from 'styled-components';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import { site } from '@/content'
import Icon1 from '@/assets/svg/step-1.svg';
import Icon2 from '@/assets/svg/step-2.svg';
import Icon3 from '@/assets/svg/step-3.svg';
import Icon4 from '@/assets/svg/step-4.svg';

const getIcon = (step: string) => {
    switch (step) {
        case 'ШАГ 1':
            return <Icon1
                width={80}
                height={80}
            />;
        case 'ШАГ 2':
            return <Icon2
                width={80}
                height={80}
            />;
        case 'ШАГ 3':
            return <Icon3
                width={80}
                height={80}
            />;
        case 'ШАГ 4':
            return <Icon4
                width={80}
                height={80}
            />;
        default:
            return null;
    }
}

function StepList() {
    return (
        <List className='grid gap-5 md:gap-10 lg:gap-5'>
            {
                site.home.steps.list.map(({ thumbnail, title, description }, index) => {
                    return (
                        <li
                            key={title}
                            className='pt-10'
                        >
                            <Card
                                className='relative flex flex-col border-foreground'
                            >
                                {/* <Image
                                    src={`${thumbnail}`}
                                    width={80}
                                    height={80}
                                    alt={`${title}` || ''}
                                    className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square object-contain object-center mx-auto'
                                /> */}
                                <Icon>
                                    {getIcon(`ШАГ ${index + 1}`)}
                                </Icon>
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
const Icon = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1/1;
`
export default StepList