import { HeroDescription, HeroLink, HeroTitle } from '@/components/shared/hero'
import HeroFooter from '@/components/shared/hero/hero-footer'
import ServiceTypeLink from '@/components/shared/service/ServiceTypeLink'
import { site } from '@/content'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css';
import { fetchAPI } from '@/lib/api/base'

const MOCK_DATA = site.visa.hero;
const query = `query GetVisaPostHeros {
    visaPostTypes {
      nodes {
        slug
        title
        visaHeroFields {
          description
          subtitle
          title
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }`;

async function getFields() {
    const data = await fetchAPI(
        query
    );

    return data?.visaPostTypes?.nodes;
}
async function ServicePageHero() {
    const data = await getFields();
    const title = data && data[0]?.visaHeroFields?.title;
    const subtitle = data && data[0]?.visaHeroFields?.subtitle;
    const description = data && data[0]?.visaHeroFields?.description;
    const featuredImage = data && data[0]?.featuredImage?.node.sourceUrl;

    return (
        <section id='service-hero' className={cn(
            'section'
        )}>
            <div className={`container`}>
                <div className={`section-inner relative`}>
                    <div className='relative flex flex-col lg:min-h-[730px]'>
                        <div className={cn(
                            'absolute',
                            styles.BgLeft
                        )} />
                        <SectionHeading title={title} subtitle={subtitle} description={description} />
                        <SectionBody />
                    </div>
                    <div className={cn(
                        'absolute',
                        styles.BgRight
                    )}>
                        {featuredImage &&
                            <Image
                                src={featuredImage}
                                width={300}
                                height={300}
                                alt={title}
                                className={cn(
                                    'relative z-20',
                                    styles.MainImage
                                )}
                            />
                        }
                        <div className={cn(
                            'bg-secondary z-10',
                            styles['bg-figure'],
                            styles.BgRightTop
                        )} />
                        <div className={cn(
                            'bg-primary z-0',
                            styles['bg-figure'],
                            styles.BgRightBottom
                        )} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const SectionHeading = (props: {
    title: string,
    subtitle?: string,
    description?: string
}) => {
    return (
        <div className='section-heading max-w-60 md:max-w-96 lg:max-w-xl'>
            <HeroTitle>
                {props.title}
            </HeroTitle>
            {props.subtitle &&
                <p className='font-bold text-sm md:text-2xl lg:text-4xl mt-0'>
                    {props.subtitle}
                </p>
            }
            {props.description &&
                <HeroDescription
                    className='text-foreground/60 lg:text-2xl'
                    dangerouslySetInnerHTML={{ __html: props.description }}
                />
            }
        </div>
    )
}
const SectionBody = () => {
    return (
        <div className='relative section-body flex flex-col gap-6 md:gap-12 flex-1 max-w-56 lg:max-w-full self-center lg:self-stretch'>
            {MOCK_DATA.links.length > 0 &&
                <ul className={cn(
                    "grid",
                    styles.HeroLinkList
                )}>
                    {
                        MOCK_DATA.links.map((item, index) => {
                            return (
                                <HeroLink key={index} {...item} className='max-w-full' />
                            )
                        })
                    }
                </ul>
            }
            {MOCK_DATA.type_links.length > 0 &&
                <ul className={cn(
                    "grid",
                    styles.HeroLinkList
                )}>
                    {
                        MOCK_DATA.type_links.map((item, index) => {
                            return (
                                <ServiceTypeLink key={index} {...item} />
                            )
                        })
                    }
                </ul>
            }
            <HeroFooter className='mt-auto lg:mt-auto' />
        </div>
    )
}

export default ServicePageHero;