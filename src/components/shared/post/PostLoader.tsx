import React from 'react'
import { LoaderIcon } from 'lucide-react'

interface Props {
    text?: string
}

export default function PostLoader(props: Props) {
    return (
        <div className='flex items-center justify-center gap-3'>
            <span>{props.text}</span>
            <LoaderIcon className="h-5 w-5 animate-spin" />
        </div>
    )
}
