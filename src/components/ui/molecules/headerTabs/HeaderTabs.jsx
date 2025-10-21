import React, { useState } from 'react';
import { headerTabs } from '../../../../core/constants/headerTabs/HeaderTabs';
import Button from '../../atom/customButton/Button';
import CollectionTab from '../collectionTab/CollectionTab';
import NewInMenu from '../newInMenu/NewInMenu';
import PlusSizeTab from '../plusSizeTab/PlusSizeTab';
import SustainabilityTab from '../sustainabilityTab/SustainabilityTab';
function HeaderTabs() {
    const [selectedTab, setSelectedTab] = useState(null)
    return (
        <div className='hidden md:w-[650px] md:h-[30px] md:flex items-center justify-between'>
            {headerTabs.map((item) => (
                <React.Fragment key={item.id}>
                    <Button
                        onClick={() => setSelectedTab(item.id)}
                        className='text-[#404040] md:text-[18px]'>
                        {item.name}
                    </Button>
                </React.Fragment>
            ))}
            {selectedTab === 1 && <CollectionTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
            {selectedTab === 2 && <NewInMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
            {selectedTab === 4 && <PlusSizeTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
            {selectedTab ===5 && <SustainabilityTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>}
        </div>
    );
}

export default HeaderTabs;