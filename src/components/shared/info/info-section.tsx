import { site } from '@/content'
import Image from 'next/image'
import React from 'react'

function InfoSection({ children }: React.HTMLAttributes<HTMLElement>) {
    return (
        <section className='section bg-accent'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading">
                        <h2 className='heading-2'>{site.home.info.title}</h2>
                        {site.home.info.description && <p dangerouslySetInnerHTML={{ __html: site.home.info.description }} />}
                    </div>
                    <div className="section-body grid md:grid-cols-[auto,_1fr] gap-4">
                        {children}
                        <Image
                        className='hidden lg:flex'
                            width={478}
                            height={540}
                            src={site.home.info.image}
                            alt={site.home.info.title}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection