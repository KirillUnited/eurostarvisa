import React from 'react'
import Navbar from './navbar'
import Logo from '../logo'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import PhoneCall from '@/components/shared/phone-call'
import HeaderMobileMenu from './header-mobile-menu'
import { getSiteInfo } from '@/lib/api/siteInfo'

const Header = async () => {
    const siteInfo = await getSiteInfo();

    return (
        <header className={cn('sticky z-50 top-0 left-0 w-full', styles.header)}>
            <div className="container max-w-screen-2xl">
                <div className="flex items-center justify-between gap-4">
                    <Logo />
                    <div className='flex justify-center'>
                        <div className='lg:flex hidden'>
                            <Navbar variant='primary' enableSubmenu />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-8 justify-end">
                        <PhoneCall phone={siteInfo.phone} label={siteInfo.phone} />
                        <HeaderMobileMenu className='lg:hidden' />
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Header