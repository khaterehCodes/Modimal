import React from 'react';
import P from '../../atom/customP/P';
import { joinUp } from '../../../../core/constants/joinUp/JoinUp';

function JoinUpFooter() {
    return (
        <div className='w-[160px] h-[130px] md:w-[190px] md:h-[150px] flex flex-col justify-between items-center md:mt-0 mt-[20px]'>
            <P className='text-white md:text-[20px] font-bold w-[85px] md:w-full'>Join Up</P>
            <div className='md:w-full md:h-[100px]'>
                {joinUp.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className='md:w-full md:h-[35px] h-[30px]'>
                            <P className='md:text-[18px] text-[14px] text-white'>{item}</P>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default JoinUpFooter;