import React from 'react'
import { HeroLinkProps, ServiceTypeLinkProps } from '../hero/hero.props'
import Image from 'next/image'
import { MoveRightIcon } from 'lucide-react'
import ServiceTourIcon from '@/assets/svg/service-type-tour-icon.svg'
import { HeroLinkBase } from '../hero/hero-link'
import InfoPopup from '../info/info-popup'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

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
function ServiceTypeLink({ link, label, type, description }: HeroLinkProps & ServiceTypeLinkProps) {
    return (
        <HeroLinkBase href={`${link}`}>
            {ServiceTypeLinkIcon(`${type}`)}
            <p className='paragraph font-bold text-center'>{label}</p>
            {description &&
                <Dialog>
                    <DialogTrigger asChild>
                        <span className='paragraph font-bold text-link flex items-center cursor-pointer'>подробнее <MoveRightIcon /></span>
                    </DialogTrigger>

                    <InfoPopup title={label} description={description}>
                    </InfoPopup>
                </Dialog>
            }
        </HeroLinkBase>
    )
}

export default ServiceTypeLink