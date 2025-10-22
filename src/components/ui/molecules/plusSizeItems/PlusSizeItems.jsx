import React from 'react';
import { plusSizeItems } from '../../../../core/constants/plusSizeitems/PlusSizeItems';
import Image from '../../atom/customImage/Image';
import P from '../../atom/customP/P';

function PlusSizeItems() {
    return (
        <div className='w-full h-full flex justify-between'>
            {plusSizeItems.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[240px] h-[470px] flex flex-col gap-4'>
                        <Image src={item.img} className='w-full h-[420px]' />
                        <P>{item.title}</P>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default PlusSizeItems;