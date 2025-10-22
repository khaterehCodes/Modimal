import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-fade';
import P from '../../atom/customP/P';
import { weekDay } from '../../../../core/constants/weekDay/WeekDay';
import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
import React, { useState } from 'react';
function ModiWeekRes() {
    const [activeCircle, setActiveCircle] = useState(0)
    return (
        <div className='md:hidden w-full h-[400px] p-2 flex flex-col justify-between mb-[20px]'>
            <P className='text-[20px] font-bold'>Modiweek</P>
            <div className='w-full h-[300px] flex'>
                <Swiper
                    loop={true}
                    navigation={false}
                    simulateTouch={true}
                    grabCursor={true}
                    slidesPerView={2}
                    onSlideChange={(swiper) => setActiveCircle(swiper.realIndex)}
                >
                    {weekDay.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='w-[160px] h-full'>
                                <Image src={item.img} className='w-full h-[250px] relative' />
                                <div className='absolute top-[10px] right-[20px]'>
                                    <Icon name={'favoriteIcon'} />
                                </div>
                                <P className='text-[14px] font-semibold'>{item.day}</P>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='w-full h-[20px] flex items-center justify-center gap-1'>
                {weekDay.map((_, index) => (
                    <React.Fragment key={index}>
                        <div className={`rounded-full ${activeCircle === index ? 'w-[12px] h-[12px] bg-[#DFDFDF]' : 'w-[8px] h-[8px] bg-[#ADADAD]'}`}></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default ModiWeekRes;