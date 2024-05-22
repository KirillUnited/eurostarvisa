import { BreadcrumbBase } from '@/components/shared/breadcrumb';
import PostDate from '@/components/shared/post/post-date';
import { SectionBase, SectionBody, SectionHeading, SectionInner } from '@/components/shared/section';
import { blog } from '@/content'
import { getPostBySlug, getPosts } from '@/lib/api/service';
import Image from 'next/image';

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
	const post = await getPostBySlug(params?.slug as string)

	return {
		title: post?.seo?.title,
		description: post?.seo?.metaDesc,
	}
}

export async function generateStaticParams() {
	const posts = await getPosts();

	return posts.map((post: any) => ({
		slug: post?.slug,
	}))
}

export default async function BlogPostPage({ params }: Props) {
	const post = await getPostBySlug(params?.slug as string);
	const author = post?.author?.node?.name;

	return (
		<>
			<SectionBase className='after:bg-foreground/40 after:absolute after:top-0 after:left-0 after:w-full after:h-full relative'>
				{
					post.featuredImage?.node?.sourceUrl &&
					<Image
						width={1400}
						height={900}
						src={post.featuredImage.node.sourceUrl}
						alt={post.title}
						className='absolute object-cover object-center top-0 left-0 w-full h-full'
						priority
					/>
				}
				<SectionInner className='relative z-10 h-screen grid place-content-center'>
					<SectionHeading className='pb-5 text-primary-foreground text-center'>
						{author && <p className="paragraph capitalize font-bold">статья от {author}</p>}
						<h1 className="heading-1">
							{post.title}
						</h1>
						{post.excerpt && <div className="paragraph md:text-2xl space-y-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />}
					</SectionHeading>
				</SectionInner>
			</SectionBase>
			<SectionBase>
				<SectionHeading>
					<BreadcrumbBase pageTitle={`${post.title}`} />
				</SectionHeading>
				<SectionInner>
					<div className='flex flex-wrap items-center gap-3 text-foreground/70 text-sm'>
						{post?.date && <PostDate date={post.date} />}
						<div>
							{
								Array.from(new Set(post.categories?.nodes)).map((item: any) => {
									return (
										item?.name
									)
								}).join(', ')
							}
						</div>
					</div>
					<SectionBody>
						<article className='prose mx-auto' dangerouslySetInnerHTML={{ __html: post.content }} />
					</SectionBody>
				</SectionInner>
			</SectionBase>
		</>
	)
}