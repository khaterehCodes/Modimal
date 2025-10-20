import React from 'react';
import { items } from '../../../../core/constants/items/Items';
import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
import P from '../../atom/customP/P';
function BestSellerItems() {
    return (
        <div className='w-full md:h-[550px] flex items-center justify-between'>
            {items.slice(0, 3).map((item) => (
                <React.Fragment key={item.id}>
                    <div className='md:w-[430px] md:h-[540px] flex flex-col justify-between'>
                        <div className='relative'>
                            <Image src={item.img} className='md:w-full md:h-[440px]' />
                            <div className='absolute md:top-[25px] md:right-[25px]'>
                                <Icon name={'favoriteIcon'} />
                            </div>
                        </div>
                        <P className='font-bold'>{item.name}</P>
                        <div className='w-full md:h-[30px] flex items-center justify-between'>
                            <P>{item.description}</P>
                            <P className='font-bold'>${item.price}</P>
                        </div>
                        <div className='w-full md:h-[30px] flex items-center gap-2'>
                            {item.colors.map((C) => (
                                <React.Fragment key={C.id}>
                                    <div className='w-[25px] h-[25px] rounded-full' style={{ backgroundColor: C.color }}></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default BestSellerItems;