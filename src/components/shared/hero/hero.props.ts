export type HeroLinkProps = {
    label: string,
    image?: string,
    name?: string,
    link?: string
}
export interface HeroProps {
    title?: string,
    subtitle?: string,
    description?: string,
    image?: string,
    links?: Array<HeroLinkProps>
    CTASection?: boolean
}