import React from 'react';
import { collectionTab } from '../../../../core/constants/collectionTab/CollectionTab';
import P from '../../atom/customP/P';

function CollectionTabRes({ openTab, }) {
    return (
        <>
            {openTab && (
                <div className='md:hidden w-[300px] h-[200px] bg-pink-400'>
                    {collectionTab.map((item) => (
                        <React.Fragment key={item.id}>
                            {item.items.map((list) => (
                                <P>{list}</P>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </>
    );
}

export default CollectionTabRes;