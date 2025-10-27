import P from "../../atom/customP/P";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-fade';
import { items } from "../../../../core/constants/items/Items";
import Image from "../../atom/customImage/Image";
import Icon from "../../atom/icons/Icon";
import React, { useState } from "react";
import { useWish } from "../../../../core/context/wishContext/WishContext";
function BestSellerRes() {
    const { wishList, wishHandler } = useWish()
    const [activeCircle, setActiveCircle] = useState(0)
    return (
        <div className="md:hidden w-full h-[420px] p-2 flex flex-col justify-between">
            <P className='text-[20px] font-bold'>Best Sellers</P>
            <div className="w-full h-[340px] flex items-center">
                <Swiper
                    loop={true}
                    navigation={false}
                    simulateTouch={true}
                    grabCursor={true}
                    slidesPerView={2}
                    onSlideChange={(swiper) => setActiveCircle(swiper.realIndex)}
                >
                    {items.slice(0, 3).map((item) => {
                        const IsWish = wishList.some(W => W.id === item.id)
                        return (
                            <SwiperSlide key={item.id}>
                                <div className="w-[160px] h-[310px] flex flex-col justify-between">
                                    <Image src={item.img} className='w-full h-[215px] relative' />
                                    <div
                                        onClick={() => wishHandler(item)}
                                        className="absolute top-[10px] right-[20px] cursor-pointer">
                                        {IsWish ? (<Icon name={'redHeart'} />) : (<Icon name={'favoriteIcon'} />)}
                                    </div>
                                    <P className='text-[14px] font-semibold'>{item.name}</P>
                                    <P className='text-[14px]'>{item.description}</P>
                                    <P className='w-[140px] h-[20px] flex items-center justify-end font-semibold text-[14px]'>${item.price}</P>
                                    <div className="w-[65px] h-[20px] flex items-center justify-between">
                                        {item.colors.map((C) => (
                                            <React.Fragment key={C.id}>
                                                <div className="w-[15px] h-[15px] rounded-full" style={{ backgroundColor: C.color }}></div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="flex justify-center gap-1 h-[30px] items-center">
                {items.slice(0, 4).map((_, index) => (
                    <React.Fragment key={index}>
                        <div className={`rounded-full ${activeCircle === index ? "w-[12px] h-[12px] bg-[#DFDFDF]" : "w-[8px] h-[8px] bg-[#ADADAD]"
                            }`}
                        ></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default BestSellerRes;