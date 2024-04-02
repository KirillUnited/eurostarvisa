import { site } from "@/content";
import React from "react";

function ApprovalSection({children}: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className="section">
            <div className="container">
                <div className="section-inner">
                    <div className="flex flex-col gap-8 lg:gap-16 max-w-[80%] md:max-w-full mx-auto">
                        <div className="flex flex-col gap-4">
                            <h3 className="heading-3">
                                {site.home.approval.title}
                            </h3>
                            <p className="paragraph">
                                {site.home.approval.description}
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalSection;
