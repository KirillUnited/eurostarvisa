'use client'
import { site } from '@/content';
import Image from 'next/image';
import React from 'react'
import styled, { css } from 'styled-components'

function ApprovalSection() {
    return (

        <div className="section">
            <div className="container">
                <div className="section-inner">
                    <div className='flex flex-col gap-8 lg:gap-16 max-w-[80%] md:max-w-full mx-auto'>
                        <div className='flex flex-col gap-4'>
                            <h3 className="heading-3">{site.home.approval.title}</h3>
                            <p className='paragraph'>{site.home.approval.description}</p>
                        </div>
                        <ApprovalCardList>
                            {
                                site.home.approval.list.map(({ label, value, image }) => {
                                    return (
                                        <ApprovalCard>
                                            <ApprovalCardImageWrap>
                                                <Image
                                                    src={`${image}`}
                                                    alt={label || 'StarVisa'}
                                                    width={120}
                                                    height={120}
                                                    className='absolute top-0 left-0 w-full h-full object-contain object-center'
                                                />
                                                <span className='relative'>{value}</span>
                                            </ApprovalCardImageWrap>
                                            <p className='text-2xl'>{label}</p>
                                        </ApprovalCard>
                                    )
                                })
                            }
                        </ApprovalCardList>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ApprovalCardList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 2rem;
`;
const ApprovalCard = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
text-align: center;
`;
const ApprovalCardImageWrap = styled.div`
position: relative;
display: grid;
place-items: center;
width: clamp(120px, 12vw, 138px);
height: clamp(120px, 12vw, 138px);
font-size: clamp(24px, 4vw, 40px);
font-weight: 700;
`

export default ApprovalSection;