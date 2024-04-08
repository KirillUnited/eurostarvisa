'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string,
    description: string | TrustedHTML,
    list?: ListItemProps[]
}

interface ListItemProps {
    thumbnail?: string, 
    title?: string
    description?: string
}

interface ListProps {
    list?: ListItemProps[]
}

export function ServicesSection({ title, description, list, children }: SectionProps) {
    return (
        <section className='section'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading text-center">
                        <h2 className='text-3xl md:text-[40px] heading-2'>{title}</h2>
                        {description &&
                            <p
                                className='paragraph'
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        }
                    </div>
                    <div className="section-body">
                        <ServiceList list={list}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ServiceList({ list }: ListProps) {
    return (
        <List className='grid'>
            {
                list?.map(({ thumbnail, title, description}: ListItemProps) => {
                    return (
                        <Card
                            key={title}
                            className={cn(
                                'flex flex-col text-center',
                                'shadow-none border-none'
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
                                <CardDescription className='paragraph text-foreground'>{description}</CardDescription>
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