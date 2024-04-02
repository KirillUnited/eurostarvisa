export type HeroButtonProps = {
    CTA?: boolean,
    label?: string,
    link?: string,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost"
}
export interface HeroProps {
    title?: string,
    subtitle?: string,
    description?: string,
    image?: string,
    links?: Array<HeroButtonProps>
}