import { ApprovalSection } from '@/components/shared/approval'
import Hero from '@/components/shared/hero'
import { site } from '@/content'

export default function Home() {
  return (
    <>
      <Hero
        title={site.home.hero.title}
        subtitle={site.home.hero.subtitle}
        description={site.home.hero.description}
        image={site.home.hero.image}
        links={site.home.hero.links}
      />
      <ApprovalSection />
    </>
  )
}
