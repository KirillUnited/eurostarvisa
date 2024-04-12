'use client'
import React from 'react'
import styled from 'styled-components';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content'

function FeaturedProductList() {
    return (
        <ProductList className='grid gap-5 md:gap-10 lg:gap-5'>
            {
                site.home.featured_products.list.map(({ thumbnail, title, description, price, link }) => {
                    return (
                        <Card
                            key={title}
                            className='flex flex-col shadow-md hover:shadow-2xl transition-all duration-300'
                        >
                            <Image
                                src={`${thumbnail}`}
                                width={234}
                                height={154}
                                alt={`${title}` || ''}
                                className='object-contain object-center aspect-[234/154] mx-auto'
                            />
                            <CardHeader>
                                <CardTitle className='text-sm lg:text-base truncate'>{title}</CardTitle>
                                <CardDescription className='text-xs lg:text-sm'>{description}</CardDescription>
                            </CardHeader>
                            <CardContent className='flex-1'>
                                <p className='font-medium text-xs lg:text-base'>{price}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant={'outline'}>
                                    <Link
                                        href={link}
                                        target='_blank'
                                    >
                                        подробнее
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>

                    )
                })
            }
        </ProductList>
    )
}

const ProductList = styled.div`
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export default FeaturedProductList