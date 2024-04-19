import PostDate from '@/components/shared/post/post-date'
import { SectionBase, SectionBody, SectionHeading, SectionInner } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { blog } from '@/content'
import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
	return {
		title: 'Blog',
		description: 'Simple Blog',
	}
}

export default function BlogPage({ params }: Props) {
	return (
		<>
			<SectionBase className='after:bg-foreground/40 after:absolute after:top-0 after:left-0 after:w-full after:h-full relative'>
				<Image
					width={1400}
					height={900}
					src={`${blog.image}`}
					alt={params.slug}
					className='absolute object-cover object-center top-0 left-0 w-full h-full'
					priority
				/>
				<SectionInner className='relative z-10'>
					<SectionHeading className='text-primary-foreground text-center'>
						<h3 className="heading-3">{blog.title}</h3>
						<p className="paragraph">{blog.description}</p>
					</SectionHeading>
				</SectionInner>
			</SectionBase>
			<SectionBase>
				<SectionInner>
					<SectionBody>
						<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							{blog.list.map(({ slug, title, description, thumbnail, date }: any) => {
								return <Card
									key={title}
									className='flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden'
								>
									<Image
										src={`${thumbnail}`}
										width={234}
										height={154}
										alt={`${title}` || ''}
										className='object-cover object-center aspect-video w-full mx-auto'
									/>
									<CardHeader className='flex-1'>
										<PostDate date={date} className='text-foreground/70 text-xs' />
										<CardTitle className='text-sm lg:text-base line-clamp-2'>{title}</CardTitle>
										<CardDescription className='text-xs lg:text-sm line-clamp-4'>{description}</CardDescription>
									</CardHeader>
									<CardFooter>
										<Button asChild variant={'link'} className='text-link gap-3 px-0'>
											<Link
												href={`/blog/${slug}`}
												target='_blank'
											>
												Подробнее
												<MoveRightIcon />
											</Link>
										</Button>
									</CardFooter>
								</Card>
							})}
						</div>

					</SectionBody>
				</SectionInner>
			</SectionBase>
		</>
	)
}