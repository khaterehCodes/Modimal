import React from 'react';
import P from '../../atom/customP/P';
import { collection } from '../../../../core/constants/collection/Collection';
import Image from '../../atom/customImage/Image';
import { gridStyles } from '../../../../core/constants/gridStyle/gridStyle';
function Collections() {
    return (
        <div className='w-full h-[600px] md:w-[1350px] md:h-[1400px] bg-white flex flex-col gap-5 md:p-0 p-2'>
            <P className='md:text-[32px] font-semibold text-[20px]'>Collection</P>
            <div className='grid grid-cols-2 md:gap-10 gap-8 auto-rows-[140px] md:auto-rows-[400px]'>
                {collection.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div className={`relative ${gridStyles[index]}`}>
                            <Image
                                src={item.img}
                                className='w-full h-full'
                            />
                            <div className='w-[75px] md:w-[185px] md:text-[16px] text-[14px] h-[40px] bg-white md:left-[15px] md:bottom-[15px] absolute flex items-center justify-center'>
                                {item.buttonText}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Collections;