export type HeroLinkProps = {
    label: string,
    image?: string,
    name?: string,
    link?: string
}
export interface HeroProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title?: string,
    subtitle?: string,
    description?: string,
    image?: string,
    links?: Array<HeroLinkProps>
    CTASection?: boolean
}