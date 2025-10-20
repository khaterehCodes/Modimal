import React from 'react';
import P from '../../atom/customP/P';
import { about } from '../../../../core/constants/about/About';
function AboutMdimal() {
    return (
        <div className='w-[160px] md:w-[210px] md:h-[250px] flex flex-col justify-between items-center md:items-start'>
            <P className='text-white md:text-[20px] font-bold'>About Modimal</P>
            <div className='md:w-full md:h-[200px] flex flex-col items-center justify-between'>
                {about.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='w-full md:h-[35px] h-[30px]'>
                            <P className='md:text-[18px] text-[14px] text-white'>{item}</P>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default AboutMdimal;