import Hero from '@/components/shared/hero'
import { site } from '@/content'

const HERO_LINKS = [
  {
    CTA: true,
    label: 'Портфолио',
    link: '/p'
  },
  {
    CTA: false,
    label: 'Подробнее',
    link: '/s',
  }
]

export default function Home() {
  return (
    <>
      <Hero
        title={site.home.hero.title}
        subtitle={site.home.hero.subtitle}
        description={site.home.hero.description}
        image={site.home.hero.image}
      />
    </>
  )
}
