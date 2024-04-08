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


function HeroFooter() {
    return (
        <Content className={cn(
            'flex flex-wrap items-center flex-col lg:flex-row lg:mt-6'
        )}>
            <Dialog>
                <DialogTrigger asChild>
                    <ContentButton
                        className={cn(
                            'w-full sm:w-fit transition-transform'
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
                    <Button>
                        оставить заявку
                    </Button>
                </DialogContent>
            </Dialog>

            <ContentButton
                variant={'outline'}
                className={cn(
                    'w-full sm:w-fit transition-transform'
                )}
            >
                заполнить анкету
            </ContentButton>
        </Content>
    )
}

const Content = styled.div`
    gap: 1rem 2.5rem;
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
`

export default HeroFooter