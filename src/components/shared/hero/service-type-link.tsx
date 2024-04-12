import React from 'react'
import { HeroLinkProps, ServiceTypeLinkProps } from './hero.props'
import Image from 'next/image'
import { MoveRightIcon } from 'lucide-react'
import ServiceTourIcon from '@/assets/svg/service-type-tour-icon.svg'
import { HeroLinkBase } from './hero-link'

const SERVICE_TYPE_1 = 'tour';
const SERVICE_TYPE_2 = 'business';
const SERVICE_TYPE_3 = 'study';

const ServiceTypeLinkIcon = (type: string) => {
    switch (type) {
        case SERVICE_TYPE_1:
            return <ServiceTourIcon className='transition-all group-hover:scale-125' width={100} height={100} />;
        case SERVICE_TYPE_2:
            return <Image
                width={100}
                height={100}
                src={`/images/service-type-business-icon.png`}
                alt={'StarVisa'}
                className='transition-all group-hover:scale-125'
            />
        case SERVICE_TYPE_3:
            return <Image
                width={100}
                height={100}
                src={`/images/service-type-study-icon.png`}
                alt={'StarVisa'}
                className='transition-all group-hover:scale-125'
            />
        default:
            return null;
    }
}
function ServiceTypeLink({ link, label, type }: HeroLinkProps & ServiceTypeLinkProps) {
    return (
        <HeroLinkBase href={`${link}`}>
            {ServiceTypeLinkIcon(`${type}`)}
            <p className='paragraph font-bold text-center'>{label}</p>
            <span className='paragraph font-bold text-link flex items-center'>подробнее <MoveRightIcon /></span>
        </HeroLinkBase>
    )
}

export default ServiceTypeLink