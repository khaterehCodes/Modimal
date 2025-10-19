import React from 'react';
import P from '../../atom/customP/P';
import { about } from '../../../../core/constants/about/About';
function AboutMdimal() {
    return (
        <div className='md:w-[210px] md:h-[250px] flex flex-col justify-between'>
            <P className='text-white md:text-[20px] md:font-bold'>About Modimal</P>
            <div className='md:w-full md:h-[200px] flex flex-col items-center justify-between'>
                {about.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='md:w-full md:h-[35px]'>
                            <P className='md:text-[18px] text-white'>{item}</P>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default AboutMdimal;