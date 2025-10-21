import React from 'react';
import { newInItems } from '../../../../core/constants/newInItems/NewInItems';
import Image from '../../atom/customImage/Image';
import P from '../../atom/customP/P';

function NewInItems() {
    return (
        <div className='w-full h-full flex justify-between'>
            {newInItems.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[220px] h-[470px] flex flex-col gap-4'>
                        <Image src={item.img} className='w-full h-[420px]' />
                        <P>{item.title}</P>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default NewInItems;