'use client'
import React from 'react'
import styled from 'styled-components'
import TestimonialFeedBg from '@/assets/svg/pixel-cells.svg'
import YandexIcon from '@/assets/svg/yandex.svg'
import GoogleIcon from '@/assets/svg/google.svg'
import Link from 'next/link'

function TestimonialFeed({ children }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className='flex flex-wrap items-center justify-between gap-x-14 gap-y-6'>
            <TestimonialFeedBg width={208} height={130} className='mx-auto'/>
            <List className='flex flex-wrap justify-center flex-1'>
                <ListItem className='text-xs'>
                    <YandexIcon className='mx-auto' />
                    <Link href={`https://www.yandex.ru/`} className='text-link'>
                        рейтинг Подробнее
                    </Link>
                    <p>5,0 / 5,0</p>
                </ListItem>
                <ListItem className='text-xs'>
                    <GoogleIcon className='mx-auto' />
                    <Link href={`https://www.google.com/`} className='text-link'>
                        рейтинг Подробнее
                    </Link>
                    <p>5,0 / 5,0</p>
                </ListItem>
                <ListItem className='text-xs'>
                    <YandexIcon className='mx-auto' />
                    <Link href={`https://www.yandex.ru/`} className='text-link'>
                        рейтинг Подробнее
                    </Link>
                    <p>5,0 / 5,0</p>
                </ListItem>
                <ListItem className='text-xs'>
                    <GoogleIcon className='mx-auto' />
                    <Link href={`https://www.google.com/`} className='text-link'>
                        рейтинг Подробнее
                    </Link>
                    <p>5,0 / 5,0</p>
                </ListItem>
            </List>
        </div>
    )
}

const List = styled.ul`
    min-width: 50%;
    gap: 16px;
`
const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    width: min-content;
`

export default TestimonialFeed