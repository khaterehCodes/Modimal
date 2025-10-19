import React from 'react';
import P from '../../atom/customP/P';
import { joinUp } from '../../../../core/constants/joinUp/JoinUp';

function JoinUpFooter() {
    return (
        <div className='md:w-[190px] md:h-[150px] flex flex-col justify-between'>
            <P className='text-white md:text-[20px] font-bold'>Join Up</P>
            <div className='md:w-full md:h-[100px]'>
                {joinUp.map((item, index) => (
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

export default JoinUpFooter;