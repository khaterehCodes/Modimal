import React from 'react';
import { useWish } from '../../../../core/context/wishContext/WishContext';
import P from '../../atom/customP/P';
import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
import WishLength from "../../molecules/wishLength/WishLength";
function WishListItems() {
    const { wishList } = useWish();
    return (
        <div className='md:w-[1350px] h-auto flex flex-col justify-between'>
            {wishList.length === 0 ? (
                <P className='text-[20px] font-bold flex items-center justify-center w-full h-[100px]'>Nothing Added</P>
            ) : (
                <div className='md:w-full h-auto flex flex-wrap gap-7 md:mt-[50px] mb-[50px] p-2 md:p-0'>
                    <WishLength />
                    {wishList.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className='md:w-[430px] w-[150px] h-[310px] md:h-[540px] flex flex-col justify-between'>
                                <div className='relative'>
                                    <Image src={item.img} className='md:w-full md:h-[440px] h-[210px]' />
                                    <div className='absolute md:top-[25px] md:right-[25px] top-[10px] right-[10px] cursor-pointer'>
                                        <Icon name={'redHeart'} />
                                    </div>
                                </div>
                                <P className='font-bold md:text-[16px] text-[14px]'>{item.name}</P>
                                <div className='w-full md:h-[30px] h-[20px] flex items-center justify-between'>
                                    <P className='text-[14px] md:text-[16px]'>{item.description}</P>
                                    <P className='font-bold md:flex hidden'>${item.price}</P>
                                </div>
                                <div className='md:hidden w-full h-[20px] flex items-center justify-end'>
                                    <P className='font-bold text-[14px]'>${item.price}</P>
                                </div>
                                <div className='w-full md:h-[30px] flex items-center gap-2'>
                                    {item.colors.map((C) => (
                                        <React.Fragment key={C.id}>
                                            <div className='md:w-[25px] w-[15px] h-[15px] md:h-[25px] rounded-full' style={{ backgroundColor: C.color }}></div>
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