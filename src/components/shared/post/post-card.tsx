import React from 'react'
import PostDate from '@/components/shared/post/post-date';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PostCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    slug?: string,
    title?: string,
    description?: string,
    thumbnail?: string,
    date?: string
}

function PostCard({ slug, title, description, thumbnail, date, className }: PostCardProps) {
    return (
        <Card
            key={title}
            className={cn(
                'group flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden',
                className
            )}
        >
            {thumbnail &&
                <Image
                    src={`${thumbnail}`}
                    width={234}
                    height={154}
                    alt={`${title}` || ''}
                    className='object-cover object-center aspect-video w-full mx-auto transition-all duration-300 group-hover:scale-110 max-h-40'
                />
            }
            <CardHeader className='flex-1'>
                {date && <PostDate date={date} className='text-foreground/70 text-xs' />}
                {title && <CardTitle className='text-sm lg:text-base line-clamp-2'>{title}</CardTitle>}
                {description && <CardDescription className='text-xs lg:text-sm line-clamp-4'>{description}</CardDescription>}
            </CardHeader>
            <CardFooter>
                {slug &&
                    <Button asChild variant={'link'} className='text-link gap-3 px-0'>
                        <Link
                            href={`/blog/${slug}`}
                            target='_blank'
                        >
                            Подробнее
                            <MoveRightIcon />
                        </Link>
                    </Button>
                }
            </CardFooter>
        </Card>
    )
}

export default PostCard