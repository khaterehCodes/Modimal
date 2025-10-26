import React from 'react';
import { useWish } from '../../../../core/context/wishContext/WishContext';
import P from '../../atom/customP/P';
import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
function WishListItems() {
    const { wishList } = useWish();
    return (
        <div className='md:w-[1350px] h-auto flex flex-col justify-between'>
            {wishList.length === 0 ? (
                <P className='md:text-[20px] font-bold flex items-center justify-center md:w-full md:h-[100px]'>Nothing Added</P>
            ) : (
                <div className='md:w-full h-auto flex flex-wrap md:gap-7 md:mt-[50px] md:mb-[50px]'>
                    <div className="md:w-[1350px] md:h-[100px] flex items-center justify-center">
                        <P className='md:text-[20px] font-bold'>My Wish List</P>
                    </div>
                    {wishList.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className='md:w-[430px] md:h-[540px] flex flex-col justify-between'>
                                <div className='relative'>
                                    <Image src={item.img} className='md:w-full md:h-[440px]' />
                                    <div className='absolute md:top-[25px] md:right-[25px] cursor-pointer'>
                                        <Icon name={'redHeart'} />
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
            )}
        </div>
    );
}

export default WishListItems;