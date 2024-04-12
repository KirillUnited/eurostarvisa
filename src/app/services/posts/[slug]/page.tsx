import PostDate from '@/components/shared/post/post-date';
import { SectionHeading, SectionInner } from '@/components/shared/section';
import { site } from '@/content'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
	return {
		title: site?.visa.seo.title,
		description: site?.visa.seo.description,
	}
}

export async function generateStaticParams() {
	const posts = site?.visa?.info?.list;

	return posts.map((post) => ({
		slug: post?.slug,
	}))
}

export default function ServicePostPage({ params }: Props) {
	const post = site?.visa?.info?.list.filter((item) => {
		return item.slug === params.slug;
	})[0]

	return (
		<>
			<section className='border-muted border'>
				<div className="container">
					<p className='text-center font-bold py-4'>Полезная информация</p>
				</div>
			</section>
			<section>
				<div className='container max-w-3xl'>
					<SectionHeading className='pb-5'>
						<p className='flex flex-wrap items-center gap-3 text-foreground/70 text-xs'>
							<PostDate date={post.date} />
							<span>{post.category}</span>
						</p>
						<h3 className="heading-3">
							{post.title}
						</h3>
					</SectionHeading>
					<article className='prose mx-auto' dangerouslySetInnerHTML={{ __html: post.content }} />
				</div>
			</section>
		</>
	)
}