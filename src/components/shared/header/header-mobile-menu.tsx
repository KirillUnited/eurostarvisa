'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Navbar from './navbar'
import { MenuIcon } from 'lucide-react'
import Logo from '../logo'
import { cn } from '@/lib/utils'
import { contacts } from '@/content'
import Link from 'next/link'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

const HeaderMobileMenu = ({ className }: Props) => {
    return (
        <div className={cn(
            'flex',
            className
        )}>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className='text-link' width={38} height={29} />
                </SheetTrigger>
                <SheetContent side={'left'} className='bg-background border-background text-foreground flex flex-col gap-6'>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <div className='flex flex-col items-center flex-1 overflow-y-auto'>
                        <Navbar variant='primary' />
                    </div>
                    <ul className='self-center text-center'>
                        {
                            contacts.map(({ label, href, name }) => {
                                const isEmail = name === 'email';

                                return (
                                    <li key={label} className='text-sm leading-relaxed'>
                                        <Link href={`${href}`} className={isEmail ? 'text-link' : ''}>{label}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default HeaderMobileMenu