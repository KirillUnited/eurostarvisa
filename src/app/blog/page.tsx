import { BreadcrumbBase } from '@/components/shared/breadcrumb'
import PostList from '@/components/shared/post/post-list'
import { SectionBase, SectionBody, SectionHeading, SectionInner } from '@/components/shared/section'
import { blog } from '@/content'
import { LoaderIcon } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'

const FAKE_COLLECTION = 'products';

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
	return {
		title: 'Blog',
		description: 'Simple Blog',
	}
}

export default async function BlogPage({ params }: Props) {
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
					<BreadcrumbBase pageTitle={`Блог`} />
					<SectionBody>
						<Suspense fallback={<PostLoader />}>
							<PostList />
						</Suspense>
					</SectionBody>
				</SectionInner>
			</SectionBase>
		</>
	)
}

function PostLoader() {
	return (
		<div className='flex items-center justify-center gap-3'>
			<span>Минуточку ...</span>
			<LoaderIcon className="h-5 w-5 animate-spin" />
		</div>
	)
}