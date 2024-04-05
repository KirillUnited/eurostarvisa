import { ApprovalSection } from '@/components/shared/approval'
import ApprovalList from '@/components/shared/approval/approval-list'
import { FAQSection } from '@/components/shared/faq'
import FAQCarousel from '@/components/shared/faq/faq-carousel'
import Hero from '@/components/shared/hero'
import { InfoList, InfoSection } from '@/components/shared/info'
import { FeaturedProductSection } from '@/components/shared/product'
import FeaturedProductList from '@/components/shared/product/featured-product-list'
import { StepList, StepSection } from '@/components/shared/step'
import { TestimonialCarousel, TestimonialSection } from '@/components/shared/testimonial'
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
