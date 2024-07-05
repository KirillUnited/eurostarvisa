'use client'
import React from 'react'
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'
import { OrderForm } from '../form'
import styled from 'styled-components'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title?: string,
    description?: string | TrustedHTML
}

const InfoPopup = ({ title, description, className }: Props) => {
    return (
        <DialogContent className={cn(
            'flex flex-col max-w-5xl max-h-screen sm:rounded-none',
            className
        )}>
            <DialogHeader className='text-left overflow-hidden'>
                {title &&
                    <DialogTitle className='text-4xl mb-3'>
                        {title}
                    </DialogTitle>
                }
                {description &&
                    <div className='overflow-y-auto'>
                        <div className='prose text-foreground' dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                }
            </DialogHeader>
            <Form buttonVariant={'default'} buttonSize={'lg'} className='flex flex-col gap-5' />
        </DialogContent>
    )
}

const Form = styled(OrderForm)`
    &>*{
        width: 100%;
    }
`

export default InfoPopup