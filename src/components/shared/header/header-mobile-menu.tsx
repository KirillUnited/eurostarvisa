'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Navbar from './navbar'
import { MenuIcon } from 'lucide-react'
import Logo from '../logo'
import { cn } from '@/lib/utils'
import { contacts } from '@/content'
import Link from 'next/link'
import { Socials } from '@/components/shared/socials'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {

}

const HeaderMobileMenu = ({ className }: Props) => {
    return (
        <div className={cn(
            'flex',
            className
        )}>
            <Dialog>
                <DialogTrigger>
                    <MenuIcon className='text-link' width={38} height={29} />
                </DialogTrigger>
                <DialogContent className='bg-background border-background sm:rounded-none max-w-full h-full text-foreground flex flex-col gap-6'>
                    <DialogHeader>
                        <DialogTitle>
                            <Logo />
                        </DialogTitle>
                    </DialogHeader>
                    <div className='flex flex-col items-center flex-1 overflow-y-auto'>
                        <Navbar variant='primary' />
                    </div>
                    <ul className='text-center'>
                        {
                            contacts.map(({ label, href, name }) => {
                                const isEmail = name === 'email';

                                return (
                                    <li key={label} className='text-sm leading-relaxed'>
                                        <Link href={`${href}`} className={cn(
                                            {
                                                'text-link': isEmail
                                            }
                                        )}>{label}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Socials />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default HeaderMobileMenu