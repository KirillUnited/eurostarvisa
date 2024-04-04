import { site } from "@/content";
import React from "react";

function ApprovalSection({ children }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className="section">
            <div className="container">
                <div className="section-inner">
                    <div className="max-w-[80%] md:max-w-full mx-auto">
                        <div className="section-heading">
                            <h2 className="heading-3">
                                {site.home.approval.title}
                            </h2>
                            <p className="paragraph">
                                {site.home.approval.description}
                            </p>
                        </div>
                        <div className="section-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalSection;
