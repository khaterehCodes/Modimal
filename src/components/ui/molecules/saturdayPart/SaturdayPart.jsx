import React from 'react';
import Image from '../../atom/customImage/Image';
import { items } from '../../../../core/constants/items/Items';
import { Link } from 'react-router-dom';
import Icon from '../../atom/icons/Icon';
import { useWish } from '../../../../core/context/wishContext/WishContext';
import P from '../../atom/customP/P';
function SaturdayPart() {
    const { wishList, wishHandler } = useWish();
    return (
        <div className='md:w-full md:h-full flex items-center justify-between'>
            <Image src='/assets/images/modiweekPicture.jpg' className='md:w-[500px] md:h-full' />
            <div className='md:w-[650px] md:h-[560px] flex flex-col'>
                <div className='md:h-[70px] flex flex-col'>
                    <P className='md:text-[20px] font-bold'>Shop the look</P>
                    <P>2 items</P>
                </div>
                <div className='md:w-full md:h-[400px] flex justify-between'>
                    {items.slice(31, 34).map((item) => {
                        const IsWish = wishList.some(W => W.id === item.id)
                        return (
                            <React.Fragment key={item.id}>
                                <Link to={`/products/${item.id}`}>
                                    <div className="md:w-[290px] w-[150px] h-[340px] md:h-[390px] flex flex-col">
                                        <div className='relative'>
                                            <Image src={item.img} className='w-full h-[210px] md:h-[320px]' />
                                            <div
                                                onClick={() => wishHandler(item)}
                                                className='absolute md:right-[25px] right-[10px] top-[10px] md:top-[25px] cursor-pointer'>
                                                {IsWish ? (<Icon name={'redHeart'} />) : (<Icon name={'favoriteIcon'} />)}
                                            </div>
                                        </div>
                                        <P className='font-bold md:text-[16px] text-[14px]'>{item.name}</P>
                                        <div className="w-full h-[30px] flex items-center justify-between">
                                            <P className='md:text-[16px] text-[14px]'>{item.description}</P>
                                            <P className='font-bold md:flex hidden'>${item.price}</P>
                                        </div>
                                        <P className='md:hidden w-[130px] h-[30px] flex items-center justify-end text-[14px] font-bold'>${item.price}</P>
                                        <div className="md:w-auto h-[30px] flex items-center gap-2">
                                            {item.colors.map((C) => (
                                                <React.Fragment key={C.id}>
                                                    <div className="md:w-[25px] w-[15px] h-[15px] md:h-[25px] rounded-full" style={{ backgroundColor: C.color }}></div>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default SaturdayPart;