import Hero from '@/components/shared/hero'

const HERO_LINKS = [
  {
    CTA: true,
    label: 'Портфолио',
    link: '/p'
  },
  {
    CTA: false,
    label: 'Подробнее',
    link: '/s'
  }
]

export default function Home() {
  return (
    <>
      <Hero
        links={HERO_LINKS}
      />
    </>
  )
}
