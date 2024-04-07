import Hero, { HeroDescription, HeroTitle } from '@/components/shared/hero'
import { site } from '@/content'
import { DocsMainSection } from './sections'
import DocsMainList from './sections/docs-main-list'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: site?.visa.seo.title,
    description: site?.visa.seo.description,
  }
}

// export async function generateStaticParams() {
//   const posts = await getCollection('services');

//   return posts.map((post) => ({
//     slug: post?.slug,
//   }))
// }

export default function VisaPage() {
  return (
    <>
      <Hero
        title={site.visa.hero.title}
        image={site.visa.hero.image}
        CTASection
      >
        <HeroTitle>
          {site.visa.hero.title}
        </HeroTitle>
        <p
          className='font-bold text-sm md:text-4xl'
        >
          {site.visa.hero.subtitle}
        </p>
        <HeroDescription
          className='text-foreground/60'
          dangerouslySetInnerHTML={{ __html: site.visa.hero.description }}
        />
      </Hero>
      <DocsMainSection>
        <DocsMainList />
      </DocsMainSection>
    </>
  )
}