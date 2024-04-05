import { site } from '@/content'
import React from 'react'

function StepSection({ children }: React.HTMLAttributes<HTMLElement>) {
    return (
        <section className='section bg-accent'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading">
                        <h2 className='heading-2'>{site.home.steps.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: site.home.steps.description }} />
                    </div>
                    <div className="section-body">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepSection