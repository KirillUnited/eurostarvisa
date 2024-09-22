'use client'
import React from 'react'
import styled from 'styled-components';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CATEGORY_NAME = "Полезная информация";

function InfoList({ posts }: any) {
    return (
        <List
            className={cn(
                'grid gap-5 md:gap-10 lg:gap-5'
            )}
        >
            {
                posts?.map((post: any) => {
                    const featuredImage = post?.featuredImage?.node?.sourceUrl;
                    const category = post.categories.nodes.filter((item: any) => {
                        if (item.name === CATEGORY_NAME) return item;
                    })

                    if (category.length < 1) return;

                    return (
                        <li
                            key={post.slug}
                        >
                            <Card
                                className={cn(
                                    'sm:grid grid-cols-[168px,_1fr] shadow-md hover:shadow-2xl transition-all duration-300 h-full'
                                )}
                            >
                                <CardHeader>
                                    <Image
                                        src={featuredImage ?? '/images/stamp.png'}
                                        width={120}
                                        height={120}
                                        alt={`${post.title}` || ''}
                                        className={cn(
                                            'aspect-square object-contain object-center mx-auto'
                                        )}
                                    />
                                </CardHeader>
                                <div className='flex flex-col'>
                                    <CardHeader>
                                        <CardTitle className='text-base line-clamp-4'>{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className='flex-1  text-sm'>
                                        <div className="line-clamp-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant={'outline'} className='w-full' asChild>
                                            <Link href={`/services/posts/${post.slug}`}>Подробнее</Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        </li>
                    )
                })
            }
        </List>
    )
}

const List = styled.ul`
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export default InfoList