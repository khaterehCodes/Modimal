import React from 'react';
import P from '../../atom/customP/P';
import { socialModimalPic } from '../../../../core/constants/socialModimalPic/SocialModimalPic';
import Image from '../../atom/customImage/Image';
function SocialModimal() {
    return (
        <div className='md:w-[1350px] md:h-[815px] flex flex-col justify-between md:mb-[50px] md:mt-[40px]'>
            <P className='md:text-[32px] font-semibold'>Follow us @modimal</P>
            <div className='md:w-full md:h-[750px] flex'>
                <Image src='/assets/images/social1.jpg' className='md:w-[660px] md:h-full' />
                <div className='md:w-[690px] md:h-full flex flex-wrap'>
                    {socialModimalPic.map((item, index) => (
                        <React.Fragment key={index}>
                            <Image src={item}  className='md:w-[345px] md:h-[375px]'/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SocialModimal;