'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import styled from 'styled-components'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { OrderForm } from '@/components/shared/form'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> { }

function HeroFooter({ className }: Props) {
    return (
        <Content className={cn(
            'flex flex-wrap items-center flex-col lg:flex-row lg:mt-6',
            className
        )}>
            <Dialog>
                <DialogTrigger asChild>
                    <ContentButton
                        className={cn(
                            'w-full lg:w-fit transition-transform'
                        )}
                    >
                        получить бесплатную консультацию
                    </ContentButton>
                </DialogTrigger>
                <DialogContent className='sm:rounded-none'>
                    <DialogHeader>
                        <DialogTitle>Оставьте заявку для консультации со специалистом.</DialogTitle>
                        <DialogDescription>
                            Позвоните нам или оставьте заявку на обратный звонок для консультации со специалистом.
                        </DialogDescription>
                    </DialogHeader>
                    <ContentForm>
                        <OrderForm className='flex flex-col gap-5' variant='default' />
                    </ContentForm>
                </DialogContent>
            </Dialog>

            <ContentButton
                variant={'outline'}
                className={cn(
                    'transition-transform w-full lg:w-fit'
                )}
            >
                заполнить анкету
            </ContentButton>
        </Content>
    )
}

const Content = styled.div`
    gap: 1rem;
`;
const ContentButton = styled(Button)`
    height: auto;
    min-height: 3.5rem;
    font-size: clamp(.875rem, 1.6vw, 1.125rem);
    white-space: normal;
    transition-duration: 300ms;
    &:hover {
        transform: scale(110%);
    }
`;
const ContentForm = styled.div`
    &>form>* {
        width: 100%;
    }
`;

export default HeroFooter