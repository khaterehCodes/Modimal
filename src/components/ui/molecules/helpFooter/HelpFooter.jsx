import React from 'react';
import P from '../../atom/customP/P';
import { help } from '../../../../core/constants/help/Help';
function HelpFooter() {
    return (
        <div className='md:w-[190px] md:h-[180px] flex flex-col justify-between'>
            <P className='text-white md:text-[20px] font-bold'>Help & Support</P>
            <div className='md:w-full md:h-[130px]'>
                {help.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='md:w-full md:h-[30px]'>
                            <P className='md:text-[18px] text-white'>{item}</P>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default HelpFooter;