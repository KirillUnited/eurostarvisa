'use client'
import { navbar, services } from '@/content';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { NavbarType, menuLinkStyle } from './navbar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from 'lucide-react';


const NavbarMobile = ({ variant, enableSubmenu }: NavbarType) => {
    const pathname = usePathname();

    return (
        <nav className='flex flex-col items-center flex-1 overflow-y-auto'>
            <ul className='flex flex-col items-center justify-center flex-1'>
                {navbar.map((link) => {
                    const isActive = (pathname === link.route) || pathname.startsWith(link.route, 1);

                    if (link.menu) {
                        return (
                            <li>
                                <Collapsible>
                                    <CollapsibleTrigger
                                        className={cn(
                                            menuLinkStyle({ variant: 'primary' }),
                                            {
                                                "font-bold text-link focus:text-link": isActive,
                                            },
                                            'w-full justify-between gap-2 [&[data-state=open]>svg]:rotate-180'
                                        )}
                                    >
                                        {link.label}
                                        <ChevronDownIcon className="h-4 w-4" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <ul className='flex flex-col'>
                                            <li>
                                                <Link href={`${link.route}`} className='text-primary flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
                                                    Все категории
                                                </Link>
                                            </li>
                                            {
                                                services.map((item) => {
                                                    return (
                                                        <li key={item.title}>
                                                            <Link
                                                                href={item.link}
                                                                className={cn(
                                                                    'flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition',
                                                                    {
                                                                        "font-medium bg-accent": isActive,
                                                                    }
                                                                )}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </CollapsibleContent>
                                </Collapsible>
                            </li>
                        )
                    }

                    return (
                        <li key={link.label}>
                            <Link href={link.route}
                                className={cn(
                                    menuLinkStyle({ variant: 'primary' }),
                                    {
                                        "font-bold text-link focus:text-link": isActive,
                                    },
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavbarMobile