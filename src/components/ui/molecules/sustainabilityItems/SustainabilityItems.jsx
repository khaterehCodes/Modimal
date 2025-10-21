import React from 'react';
import { sustainabilityItem } from '../../../../core/constants/sustainabilityItems/SustainabilityItems';
import Image from '../../atom/customImage/Image';

function SustainabilityItems() {
    return (
        <div className='w-full h-full flex justify-between'>
            {sustainabilityItem.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[400px] h-[440px]'>
                        <Image src={item.img} className='w-full h-full' />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default SustainabilityItems;