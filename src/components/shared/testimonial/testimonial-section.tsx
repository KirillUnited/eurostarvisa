import { testimonials } from '@/content'
import React from 'react'

function TestimonialSection({ children }: React.HTMLAttributes<HTMLElement>) {
    return (
        <section className='section'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading">
                        <h2 className='heading-2'>{testimonials.title}</h2>
                    </div>
                    <div className="section-body">
                        {children}
                    </div>
                    <p className='font-medium text-xs md:text-base' dangerouslySetInnerHTML={{ __html: testimonials.description }} />
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection