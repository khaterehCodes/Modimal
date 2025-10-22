import React from 'react';
import P from '../../atom/customP/P';
import { socialModimalPic } from '../../../../core/constants/socialModimalPic/SocialModimalPic';
import Image from '../../atom/customImage/Image';
function SocialModimal() {
    return (
        <div className='w-full h-[450px] md:w-[1350px] md:h-[815px] flex flex-col md:justify-between justify-around items-center md:items-start md:mb-[50px] md:mt-[40px]'>
            <P className='md:text-[32px] font-semibold text-[20px]'>Follow us @modimal</P>
            <div className='w-[330px] h-[400px] md:w-full md:h-[750px] flex'>
                <Image src='/assets/images/social1.jpg' className='md:w-[660px] md:h-full md:flex hidden' />
                <div className='w-[330px] h-[400px] md:w-[690px] md:h-full flex flex-wrap'>
                    {socialModimalPic.map((item, index) => (
                        <React.Fragment key={index}>
                            <Image src={item}  className='w-[150px] h-[200px] md:w-[345px] md:h-[375px]'/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SocialModimal;