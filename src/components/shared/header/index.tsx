'use client'
import React from 'react'
import Navbar from './navbar'
import { Button } from '../../ui/button'
import Logo from '../logo'
import { cn } from '@/lib/utils'
import styles from './styles.module.css'
import PhoneCall from '@/components/shared/phone-call'
// import CTAModal from '@/components/shared/modal/cta-modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import styled from 'styled-components'
import { MenuIcon } from 'lucide-react'
import { contacts, site } from '@/content'

const Header = () => {
    const contact = contacts[1];
    return (
        <header className={cn('sticky z-50 top-0 left-0 w-full', styles.header)}>
            <div className="container max-w-screen-2xl">
                <HeaderInner className="flex items-center justify-between gap-4">
                    <Logo />
                    <div className='flex justify-center'>
                        <div className='lg:flex hidden'>
                            <Navbar variant='primary' enableSubmenu />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-8 justify-end">
                        <PhoneCall phone={contact.href} label={contact.label} />
                        {/* <Dialog>
                            <DialogTrigger asChild>
                                <Button size={'lg'} className='text-base'>Обратная связь</Button>
                            </DialogTrigger>
                            <CTAModal />
                        </Dialog> */}
                        <MenuIcon className='text-link lg:hidden' width={38} height={29} />
                    </div>
                </HeaderInner>
            </div>
        </header>
    )
}

const HeaderInner = styled.div`
    /* --side-col-width: 230px;
    display: grid;
    min-height: 50px;
    grid-template-columns: var(--side-col-width) 1fr var(--side-col-width); */
`

export default Header