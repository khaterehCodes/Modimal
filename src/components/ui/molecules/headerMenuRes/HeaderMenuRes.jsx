import React, { useState } from "react";
import { headerTabs } from "../../../../core/constants/headerTabs/HeaderTabs";
import P from '../../atom/customP/P';
import Button from "../../atom/customButton/Button";
import Icon from "../../atom/icons/Icon";
import CollectionTabRes from "../collectionTabRes/CollectionTabRes";
function HeaderMenuRes({ clickHamberger }) {
    const [openTab, setOpenTab] = useState(null)
    const buttonsHandler = (id) => {
        setOpenTab((prev) => prev===id ? null : id)
    }
    // if (clickHamberger) {
    //     document.body.style.overflow = 'hidden'
    // } else {
    //     document.body.style.overflow = 'auto'
    // }
    return (
        <>
            {clickHamberger && (
                <div className="md:hidden w-full h-auto bg-white fixed inset-0 z-50 mt-[70px] flex justify-center">
                    <div className="w-[330px] h-auto bg-green-400 flex flex-col">
                        {headerTabs.map((item) => (
                            <React.Fragment key={item.id}>
                                <div className="w-full h-[50px] flex items-center justify-between p-3 border-b-[1px] border-black">
                                    <P>{item.name}</P>
                                    <Button onClick={() => buttonsHandler(item.id)}>
                                        {openTab===item.id ? (<Icon name={'downArrowRes'} />) : (<Icon name={'upArrowRes'} />)}
                                    </Button>
                                </div>
                                {openTab === 1 && (<CollectionTabRes openTab={openTab}/>)}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default HeaderMenuRes;