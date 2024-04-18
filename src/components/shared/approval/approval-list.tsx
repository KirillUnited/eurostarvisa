"use client";
import React from 'react'
import Image from "next/image";
import styled from "styled-components";
import { site } from "@/content";
import Icon1 from '@/assets/svg/approval-1.svg';
import Icon2 from '@/assets/svg/approval-2.svg';
import Icon3 from '@/assets/svg/approval-3.svg';

const getIcon = (step: string) => {
    switch (step) {
        case 'approvals':
            return <Icon1 />;
        case 'rejects':
            return <Icon2 />;
        case 'rejects_approvals':
            return <Icon3 />;
        default:
            return null;
    }
}

function ApprovalList() {
    return (
        <CardList>
            {site.home.approval.list.map(
                ({ label, value, image, name }) => {
                    return (
                        <Card key={value}>
                            <CardImageWrap>
                                {/* <Image
                                    src={`${image}`}
                                    alt={label || "StarVisa"}
                                    width={120}
                                    height={120}
                                    className="w-full h-full object-contain object-center"
                                /> */}
                                {getIcon(`${name}`)}
                                <span className="relative">
                                    {value}
                                </span>
                            </CardImageWrap>
                            <p className="text-2xl">{label}</p>
                        </Card>
                    );
                }
            )}
        </CardList>
    )
}

const CardList = styled.div`
    width: min(64rem, 100%);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
`;
const Card = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
`;
const CardImageWrap = styled.div`
    --size: clamp(120px, 12vw, 138px);

    position: relative;
    display: grid;
    place-items: center;
    width: var(--size);
    height: var(--size);
    font-size: clamp(24px, 4vw, 40px);
    font-weight: 700;
    &>* {
        grid-area: 1/1;
    }
`;

export default ApprovalList