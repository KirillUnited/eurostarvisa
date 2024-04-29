import { BreadcrumbBase } from '@/components/shared/breadcrumb';
import PostDate from '@/components/shared/post/post-date';
import { SectionBase, SectionBody, SectionHeading, SectionInner } from '@/components/shared/section';
import { blog } from '@/content'
import Image from 'next/image';

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
	return {
		title: 'Blog Post page',
		description: 'Simple Post page',
	}
}

export async function generateStaticParams() {
	const posts = blog.list;

	return posts.map((post) => ({
		slug: post?.slug,
	}))
}

export default function BlogPostPage({ params }: Props) {
	const post = blog.list.filter((item) => {
		return item.slug === params.slug;
	})[0]

	return (
		<>
			<SectionBase className='after:bg-foreground/40 after:absolute after:top-0 after:left-0 after:w-full after:h-full relative'>
				<Image
					width={1400}
					height={900}
					src={post.thumbnail}
					alt={post.title}
					className='absolute object-cover object-center top-0 left-0 w-full h-full'
					priority
				/>
				<SectionInner className='relative z-10 h-screen grid place-content-center'>
					<SectionHeading className='pb-5 text-primary-foreground text-center'>
						<p className="paragraph capitalize font-bold">статья от {post.author}</p>
						<h1 className="heading-1">
							{post.title}
						</h1>
						<p className="paragraph md:text-2xl">{post.description}</p>
					</SectionHeading>
				</SectionInner>
			</SectionBase>
			<SectionBase>
				<SectionHeading><BreadcrumbBase slug={`${post.slug}`} /></SectionHeading>
				<SectionInner>
					<div className='flex flex-wrap items-center gap-3 text-foreground/70 text-sm'>
						<PostDate date={post.date} />
						<span>{post.category}</span>
					</div>
					<SectionBody>
						<article className='prose mx-auto' dangerouslySetInnerHTML={{ __html: post.content }} />
					</SectionBody>
				</SectionInner>
			</SectionBase>
		</>
	)
}