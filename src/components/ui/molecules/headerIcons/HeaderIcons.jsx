import React from 'react';
import { headerIcons } from '../../../../core/constants/headerIcons/HeaderIcons';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
function HeaderIcons() {
    return (
        <div className='md:w-[180px] md:h-[30px] flex items-center justify-between'>
            {headerIcons.map((item) => (
                <React.Fragment key={item.id}>
                    <Button className='md:w-[30px] md:h-[30px] flex items-center justify-center'>
                        <Icon name={item.icon} />
                    </Button>
                </React.Fragment>
            ))}
        </div>
    );
}

export default HeaderIcons;