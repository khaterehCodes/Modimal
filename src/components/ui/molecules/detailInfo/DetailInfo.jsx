import React, { useState } from "react";
import P from "../../atom/customP/P";
import Button from "../../atom/customButton/Button";
import Icon from "../../atom/icons/Icon";
import { useWish } from '../../../../core/context/wishContext/WishContext';
import { sizes } from "../../../../core/constants/sizes/Sizes";

function DetailInfo({ findItems }) {
    const { wishList, wishHandler } = useWish();
    const IsWish = wishList.some(W => W.id === findItems.id);
    const [openSize, setOpenSize] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const sizeHandler = (item) => {
        setSelectedSize(item)
        setOpenSize(false)
    }
    return (
        <div className="md:w-[700px] md:h-[470px] flex flex-col justify-between">
            <P className='text-[#0C0C0C] md:font-semibold md:text-[32px]'>{findItems.name}</P>
            <P className='md:text-[18px] md:w-[550px]'>Versatile And Universally Flattering, Our Wrap Blouse Can Be Tied, Draped, Snapped And Wrapped Multiple Ways.</P>
            <div className="md:w-full md:h-[70px] flex flex-col justify-around">
                <P>Colors</P>
                <div className="flex md:gap-2">
                    {findItems.colors.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className="md:w-[25px] md:h-[25px] rounded-full" style={{ backgroundColor: item.color }}></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="md:w-[550px] md:h-auto flex flex-col md:gap-2">
                <P className='md:w-full flex justify-end text-[#868686]'>Size Guide</P>
                <div className="w-full md:h-[40px] border border-[#DFDFDF] flex items-center justify-between md:p-3">
                    <P className='font-bold'>{openSize ? 'Size' :selectedSize }</P>
                    <Button
                        onClick={() => setOpenSize(true)}
                        className='md:w-[20px] md:h-[20px]'>
                        <Icon name={'sizeIcon'} />
                    </Button>
                </div>
                {openSize && (
                    <div className="w-full h-auto border-[#DFDFDF] border cursor-pointer">
                        {sizes.map((item, index) => (
                            <React.Fragment key={index}>
                                <div
                                    onClick={() => sizeHandler(item)}
                                    className="w-full h-[35px] border-b border-[#DFDFDF] p-3 flex items-center">
                                    <P>{item}</P>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                )}
                <Button className='md:w-full md:h-[40px] bg-[#5A6D57] text-white'>
                    Add To Cart
                </Button>
            </div>
            <div className="md:w-[550px] md:h-[70px] flex items-center justify-between ">
                <Icon name={'shippingIcon'} />
                <div className="md:w-[180px] h-full flex items-center justify-center">
                    <Button onClick={() => wishHandler(findItems)}>
                        {IsWish ? (<Icon name={'redHeart'} />) : (<Icon name={'favoriteIcon'} />)}
                    </Button>
                    <P className='text-[#868686] text-[14px] font-light'>Add To Wish List</P>
                </div>
            </div>
        </div>
    );
}

export default DetailInfo;