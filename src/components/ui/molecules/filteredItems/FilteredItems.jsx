import React from "react";
import Image from "../../atom/customImage/Image";
import P from "../../atom/customP/P";
import Filters from "../filters/Filters";
import { useWish } from '../../../../core/context/wishContext/WishContext';
import Icon from '../../atom/icons/Icon';

function FilteredItems({ filterItems }) {
    const { wishList, wishHandler } = useWish();
    return (
        <div className="md:w-[1350px] h-auto flex justify-between items-start">
            <div className="md:w-[400px] h-auto">
                <Filters />
            </div>
            <div className="md:w-[850px] h-auto flex flex-wrap items-center justify-between">
                {filterItems.map((item) => {
                    const IsWish = wishList.some(W => W.id === item.id)
                    return (
                        <React.Fragment key={item.id}>
                            <div className="md:w-[400px] md:h-[540px] flex flex-col">
                                <div className='relative'>
                                    <Image src={item.img} className='w-full md:h-[430px]' />
                                    <div
                                        onClick={() => wishHandler(item)}
                                        className='absolute md:right-[25px] md:top-[25px] cursor-pointer'>
                                        {IsWish ? (<Icon name={'redHeart'} />) : (<Icon name={'favoriteIcon'} />)}
                                    </div>
                                </div>
                                <P className='font-bold'>{item.name}</P>
                                <div className="w-full md:h-[30px] flex items-center justify-between">
                                    <P>{item.description}</P>
                                    <P className='font-bold'>${item.price}</P>
                                </div>
                                <div className="md:w-auto md:h-[30px] flex items-center md:gap-2">
                                    {item.colors.map((C) => (
                                        <React.Fragment key={C.id}>
                                            <div className="md:w-[25px] md:h-[25px] rounded-full" style={{ backgroundColor: C.color }}></div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
}

export default FilteredItems;