'use client'
import { services } from '@/content';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { menuLinkStyle } from './navbar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from 'lucide-react';

const NavbarMobileSubmenu = ({link, state}:{link?:{label?:string, route?: string}, state?:boolean})=>{
    return (
        <li key={link?.label}>
            <Collapsible>
                <CollapsibleTrigger
                    className={cn(
                        menuLinkStyle({ variant: 'primary' }),
                        {
                            "font-bold text-link focus:text-link": state,
                        },
                        'w-full justify-between gap-2 [&[data-state=open]>svg]:rotate-180'
                    )}
                >
                    {link?.label}
                    <ChevronDownIcon className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <ul className='flex flex-col'>
                        <li>
                            <Link href={`${link?.route}`} className='text-primary flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
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
                                                    "font-medium bg-accent": state,
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

export default NavbarMobileSubmenu