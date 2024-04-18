'use client'
import React from 'react'
import OrderForm from './order-form'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import styled from 'styled-components'
import { Body, Root } from './styles'

export default async function OrderSection({ className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Root
            id="order_section"
            className={cn(
                "section relative bg-primary text-primary-foreground",
                className
            )}>
            <div className={cn("container")}>
                <div className="section-inner">
                    <Image
                        width={508}
                        height={496}
                        alt='StarVisa'
                        src={`/images/form-bg.png`}
                        className={cn(
                            'absolute max-h-full max-w-[50%] bottom-0 right-0 object-contain object-center'
                        )}
                    />
                    <Body className={cn('relative mx-auto')}>
                        <div className={cn(
                            'section-heading text-center'
                        )}>
                            <h2 className="heading-3">
                                Оставьте заявку и мы бесплатно Вас проконсультируем.
                            </h2>
                            <p className={cn("paragraph")}>
                                Позвоните нам или оставьте заявку на обратный звонок для консультации со специалистом.
                            </p>
                        </div>
                        <div className={cn(
                            'section-body'
                        )}>
                            <OrderForm className={cn(
                                'flex flex-wrap gap-5 md:justify-center max-w-48 md:max-w-full'
                            )} />
                        </div>
                    </Body>
                </div>
            </div>
        </Root>
    )
}