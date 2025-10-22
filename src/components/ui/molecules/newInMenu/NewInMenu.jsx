import React from 'react';
import { newInTab } from '../../../../core/constants/newInTab/NewInTab';
import P from '../../atom/customP/P';
import NewInItems from '../newInItems/NewInItems';
function NewInMenu({ selectedTab, setSelectedTab }) {
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
                    <div className="w-full h-[500px] bg-white flex items-center justify-center">
                        <div className='w-[1350px] h-full flex justify-between'>
                            <div className="w-[400px] h-[400px] flex items-center justify-between">
                                {newInTab.map((item) => (
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
                            <div className='w-[750px] h-full'>
                                <NewInItems />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default NewInMenu;