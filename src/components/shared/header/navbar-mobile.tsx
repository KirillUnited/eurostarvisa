'use client'
import { navbar } from '@/content';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { menuLinkStyle } from './navbar';
import NavbarMobileSubmenu from './navbar-mobile-submenu';

const NavbarMobile = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const pathname = usePathname();

    return (
        <nav
            className={cn(
                'flex flex-col items-center flex-1 overflow-y-auto',
                className
            )}
            {...props}
        >
            <ul className='flex flex-col items-center justify-center flex-1'>
                {navbar.map((link) => {
                    const isActive = (pathname === link.route) || pathname.startsWith(link.route, 1);

                    if (link.menu) return <NavbarMobileSubmenu link={link} state={isActive}/>

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