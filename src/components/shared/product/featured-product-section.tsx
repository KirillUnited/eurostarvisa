import { site } from '@/content'
import React from 'react'

function FeaturedProductSection({children}: React.HTMLAttributes<HTMLElement>) {
    return (
        <section className='section'>
            <div className="container">
                <div className="section-heading">
                    <h2 className='heading-2'>{site.home.featured_products.title}</h2>
                </div>
                <div className="section-inner">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProductSection