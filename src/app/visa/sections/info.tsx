'use client'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string
    description: string
    image?: string
}

function InfoImportant({ title, description, image }: Props) {
    return (
        <Content className='flex flex-col lg:grid rounded-3xl bg-primary text-primary-foreground'>
            <ContentBody className='space-y-5'>
                <h3 className="heading-3 text-center">
                    {title}
                </h3>
                <p className='text-xs md:text-lg'>
                    {description}
                </p>
            </ContentBody>
            <Image
                src={`${image}`}
                width={360}
                height={286}
                alt={title}
                className='mx-auto order-[-1] lg:order-1'
            />
        </Content>
    )
}

const Content = styled.div`
    --primary: 1 59% 57%;

    grid-template-columns: auto min(360px, 50%);
    gap: 10px;
`;
const ContentBody = styled.div`
    padding: clamp(10px, 3vw, 30px);
`

export default InfoImportant