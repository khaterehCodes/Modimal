import React from "react";
import { collectionTab } from "../../../../core/constants/collectionTab/CollectionTab";
import P from '../../atom/customP/P';
import CollectionsItems from "../collectionItems/CollectionsItems";
function CollectionTab({ selectedTab, setSelectedTab }) {
    if (selectedTab) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    return (
        <>
            {selectedTab && (
                <div
                    onClick={() => setSelectedTab(false)}
                    className="hidden md:flex fixed inset-0 z-50 mt-[110px] backdrop-blur-md bg-[#0000007A] cursor-pointer">
                    <div className="w-full h-[500px] bg-white flex justify-center gap-7">
                        <div className="w-[640px] h-[400px] flex items-center justify-between">
                            {collectionTab.map((item) => (
                                <React.Fragment key={item.id}>
                                    <div className="w-[185px] h-[370px] flex flex-col">
                                        <P className='text-[18px] mb-[20px]'>{item.title}</P>
                                        <div className="w-full h-auto flex flex-col gap-2">
                                            {item.items.map((list, index) => (
                                                <React.Fragment key={index}>
                                                    <P className='text-[#404040] text-[18px] cursor-pointer'>{list}</P>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="w-[670px] h-[500px]">
                            <CollectionsItems />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CollectionTab;