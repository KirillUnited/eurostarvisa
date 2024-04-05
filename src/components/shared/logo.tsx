'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoLink href={`/`} className='my-1'>
            <Image
                src={`/images/logo.svg`}
                width={122}
                height={24}
                alt='StarVisa Logo'
                className='w-full h-full object-contain'
                quality={50}
                priority
            />
        </LogoLink>
    )
}

const LogoLink = styled(Link)`
    display: inline-flex;
    width: clamp(150px, 20vw, 200px);
    height: clamp(40px, 5vw, 50px);
`

export default Logo