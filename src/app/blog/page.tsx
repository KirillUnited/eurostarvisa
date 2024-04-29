import { PostCard } from '@/components/shared/post'
import { SectionBase, SectionBody, SectionHeading, SectionInner } from '@/components/shared/section'
import { blog } from '@/content'
import Image from 'next/image'

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
					alt={`StarVisa`}
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
							{blog.list.map((item) => {
								return <PostCard key={item.date} {...item}/>
							})}
						</div>
					</SectionBody>
				</SectionInner>
			</SectionBase>
		</>
	)
}