import React, { useState } from 'react';
import { items } from '../../../../core/constants/items/Items';
import Image from '../../atom/customImage/Image';
import P from '../../atom/customP/P';
import { useWish } from '../../../../core/context/wishContext/WishContext';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';

function Products() {
    const { wishList, wishHandler } = useWish();
    const [showItems, setShowItems] = useState(6)
    const loadMoreHandler = () => {
        setShowItems(items.length)
    }
    return (
        <div className='w-full h-auto flex flex-wrap items-center justify-between md:gap-5'>
            {items.slice(0, showItems).map((item) => {
                const IsWish = wishList.some(W => W.id === item.id)
                return (
                    <React.Fragment key={item.id}>
                        <div className="md:w-[400px] w-[150px] h-[340px] md:h-[540px] flex flex-col">
                            <div className='relative'>
                                <Image src={item.img} className='w-full h-[210px] md:h-[430px]' />
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
                    </React.Fragment>
                )
            })}
            {showItems < items.length && (
                <div className='w-full md:h-[50px] bg-purple-300 flex items-center justify-center'>
                    <Button
                        onClick={loadMoreHandler}
                        className='md:w-[185px] md:h-[40px] border border-[#5A6D57] text-[#5A6D57]'>
                        load more
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Products;