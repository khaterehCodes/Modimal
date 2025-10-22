import React from 'react';
import Image from '../../atom/customImage/Image';
import { collectionItems } from '../../../../core/constants/collectionItems/CollectionItems';
import P from '../../atom/customP/P';
function CollectionsItems() {
    return (
        <div className='w-full h-full flex justify-between'>
            {collectionItems.map((item) => (
                <React.Fragment key={item.id}>
                    <div className='w-[300px] h-[470px] flex flex-col gap-4'>
                        <Image src={item.img} classNamew='w-full h-[430px]' />
                        <P>{item.title}</P>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default CollectionsItems;