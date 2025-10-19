import React from 'react';
import { headerTabs } from '../../../../core/constants/headerTabs/HeaderTabs';
import Button from '../../atom/customButton/Button';
function HeaderTabs() {
    return (
        <div className='hidden md:w-[650px] md:h-[30px] md:flex items-center justify-between'>
            {headerTabs.map((item) => (
                <React.Fragment key={item.id}>
                    <Button className='text-[#404040] md:text-[18px]'>
                        {item.name}
                    </Button>
                </React.Fragment>
            ))}
        </div>
    );
}

export default HeaderTabs;