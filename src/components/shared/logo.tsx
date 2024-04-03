import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoIcon from '@/assets/images/logo.svg'

const Logo = () => {
    return (
        <Link href={`/`} className='logo'>
            {/* <Image
                src={`/images/Logo.svg`}
                width={122}
                height={24}
                alt='DigitalAgency Logo'
            /> */}
            <LogoIcon className='logo-icon' />
        </Link>
    )
}

export default Logo