import { ApprovalSection } from '@/components/shared/approval'
import ApprovalList from '@/components/shared/approval/approval-list'
import { FAQSection } from '@/components/shared/faq'
import FAQCarousel from '@/components/shared/faq/faq-carousel'
import Hero, { HeroDescription, HeroLink, HeroTitle } from '@/components/shared/hero'
import { InfoList, InfoSection } from '@/components/shared/info'
import { FeaturedProductSection } from '@/components/shared/product'
import FeaturedProductList from '@/components/shared/product/featured-product-list'
import { StepList, StepSection } from '@/components/shared/step'
import { TestimonialCarousel, TestimonialSection } from '@/components/shared/testimonial'
import { site } from '@/content'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: site?.home?.seo?.title,
    description: site?.home?.seo?.description,
  }
}

export default function Home() {
  const title = site.home.hero.title
  const subtitle = site.home.hero.subtitle
  const description = site.home.hero.description
  const image = site.home.hero.image
  const links = site.home.hero.links

  return (
    <>
      <Hero
        title={site.home.hero.title}
        subtitle={site.home.hero.subtitle}
        description={site.home.hero.description}
        image={site.home.hero.image}
        links={site.home.hero.links}
      >
        <HeroDescription
          className='font-bold text-xl md:text-3xl lg:text-4xl md:max-w-[55%] lg:max-w-full'
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        {links.length > 0 &&
          <div className="flex flex-wrap gap-5 md:gap-8 md:max-w-[40%] lg:max-w-full">
            {
              links.map((item) => {
                return (
                  <HeroLink key={item.name} {...item} />
                )
              })
            }
          </div>
        }
        <HeroTitle className='text-xl md:text-3xl lg:text-4xl'>
          {title}
        </HeroTitle>
        <HeroDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Hero>
      <ApprovalSection>
        <ApprovalList />
      </ApprovalSection>
      <FeaturedProductSection>
        <FeaturedProductList />
      </FeaturedProductSection>
      <StepSection>
        <StepList />
      </StepSection>
      <FAQSection>
        <FAQCarousel />
      </FAQSection>
      <InfoSection>
        <InfoList />
      </InfoSection>
      <TestimonialSection>
        <TestimonialCarousel />
      </TestimonialSection>
    </>
  )
}
