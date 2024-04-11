'use client'
import { socials } from '@/content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const MOCKUP_DATA = socials.instagram.feed;

function InstagramFeed({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div
            className={cn(
                'py-2',
                className
            )}
            {...props}
        >
            <List className='grid'>
                {
                    MOCKUP_DATA.map(({ thumbnail, description, link }, index) => {
                        return (
                            <li key={index}>
                                <Card
                                    href={link}
                                    target='_blank'
                                    rel='noopener'
                                    className='grid group'
                                >
                                    <Image
                                        src={thumbnail}
                                        width={298}
                                        height={298}
                                        alt={description}
                                        className='w-full aspect-square'
                                    />
                                    <CardBody className='scale-0 group-hover:scale-100 flex flex-col justify-center text-xs overflow-hidden transition-all duration-500'>
                                        <p className='line-clamp-6'>{description}</p>
                                    </CardBody>
                                </Card>
                            </li>
                        )
                    })
                }
            </List>
        </div>
    )
}

const List = styled.ul`
    grid-template-columns: repeat(auto-fill, minmax(min(160px,100%), 1fr));
    gap: 10px;
`
const Card = styled(Link)`
    height: 100%;
    &>* {
        grid-area: 1/1;
    }
`
const CardBody = styled.div`
    color: #fff;
    background-color: rgba(0, 0, 0, .8);
    backface-visibility: hidden;
    text-align: center;
    padding-inline: 8px;
`

export default InstagramFeed