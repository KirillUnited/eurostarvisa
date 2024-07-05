export interface OrderFormProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    buttonSize?: "default" | "sm" | "lg" | "icon" | null | undefined
}