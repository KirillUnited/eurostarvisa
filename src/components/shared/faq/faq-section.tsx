import { FAQ, site } from "@/content";
import React from "react";

function FAQSection({ children }: React.HTMLAttributes<HTMLElement>) {
    return (
        <section className='section'>
            <div className="container">
                <div className='section-inner'>
                    <div className="section-heading">
                        <h3 className='heading-3'>{FAQ.title}</h3>
                        {FAQ.description &&
                            <p dangerouslySetInnerHTML={{ __html: FAQ.description }} />
                        }
                    </div>
                    <div className="section-body">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
