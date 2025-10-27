import P from '../../atom/customP/P';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-fade';
import { weekDay } from '../../../../core/constants/weekDay/WeekDay';
import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
import { useWish } from '../../../../core/context/wishContext/WishContext';
function ModiWeek() {
    const { wishList, wishHandler } = useWish();
    return (
        <div className='hidden md:w-[1350px] md:h-[600px] md:flex flex-col justify-around'>
            <P className='md:text-[32px] font-semibold'>Modiweek</P>
            <div className='w-full md:h-[500px] flex'>
                <Swiper
                    loop={true}
                    simulateTouch={true}
                    grabCursor={true}
                    slidesPerView={4.3}
                    navigation={false}
                >
                    {weekDay.map((item) => {
                        const IsWish = wishList.some(W => W.id === item.id)
                        return (
                            <SwiperSlide key={item.id}>
                                <div className='md:w-[300px] md:h-[490px] flex flex-col justify-between'>
                                    <div className='relative'>
                                        <Image src={item.img} className='w-full md:h-[430px]' />
                                        <div
                                            onClick={() => wishHandler(item)}
                                            className='absolute md:right-[25px] md:top-[25px] cursor-pointer'>
                                            {IsWish ? (<Icon name={'redHeart'} />) : (<Icon name={'favoriteIcon'} />)}
                                        </div>
                                    </div>
                                    <P className='font-bold'>{item.day}</P>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default ModiWeek;