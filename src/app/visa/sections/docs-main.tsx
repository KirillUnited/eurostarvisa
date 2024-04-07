import React from 'react'
interface Props extends React.HTMLAttributes<HTMLElement> {
    title: string,
    description: string | TrustedHTML
}
export default function DocsMainSection({ title, description, children }: Props) {
    return (
        <section className='section'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading text-center">
                        <h2 className='text-3xl md:text-[40px] heading-2'>{title}</h2>
                        {description &&
                            <p
                                className='paragraph'
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        }
                    </div>
                    <div className="section-body">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}