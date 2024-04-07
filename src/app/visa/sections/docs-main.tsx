import { site } from '@/content'
import React from 'react'

export default function DocsMainSection({ children }: React.HTMLAttributes<HTMLElement>) {
    const section = site.visa.docs.main;

    return (
        <section className='section'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading text-center">
                        <h2 className='text-3xl md:text-[40px] heading-2'>{section.title}</h2>
                        <p
                            className='paragraph'
                            dangerouslySetInnerHTML={{ __html: section.description }}
                        />
                    </div>
                    <div className="section-body">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}