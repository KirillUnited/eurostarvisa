'use client'
import { InfoIcon } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'

interface Props {
    info: string
}

function DocsInfo({ info }: Props) {
    return (
        <section>
            <div className='container'>
                <div className='py-2'>
                    <DocsInfoContent className='rounded-3xl bg-primary text-primary-foreground'>
                        <InfoIcon />
                        <span className='paragraph'>{info}</span>
                    </DocsInfoContent>
                </div>
            </div>
        </section>
    )
}

const DocsInfoContent = styled.div`
    --primary: 1 59% 57%;

    display: grid;
    grid-template-columns: auto auto;
    place-content: center;
    gap: 10px;
    padding: clamp(10px, 3vw, 30px);
`

export default DocsInfo