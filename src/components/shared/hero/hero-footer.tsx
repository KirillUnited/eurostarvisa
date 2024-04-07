import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import styles from './styles.module.css'
import styled from 'styled-components'

function HeroFooter() {
    return (
        <Content className={cn(
            'flex flex-wrap items-center flex-col lg:flex-row lg:mt-6'
        )}>
            <ContentButton
                className={cn(
                    'w-full sm:w-fit transition-transform'
                )}
            >
                получить бесплатную консультацию
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
    &:hover {
        transform: scale(110%);
    }
`

export default HeroFooter