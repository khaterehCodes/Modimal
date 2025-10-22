import React, { useState } from 'react';
import { headerIcons } from '../../../../core/constants/headerIcons/HeaderIcons';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
import SearchModal from '../searchModal/SearchModal';
function HeaderIcons({ openSearch, setOpenSearch }) {
    const [clickIcon, setClickIcon] = useState(null)
    const iconsClickHandler = (id) => {
        setClickIcon((prev) => prev === id ? null : id)
        if (id === 1) {
            setOpenSearch(prev => !prev)
        } else {
            setOpenSearch(false)
        }
    }
    return (
        <div className='hidden md:w-[180px] md:h-[30px] md:flex items-center justify-between'>
            {headerIcons.map((item) => (
                <React.Fragment key={item.id}>
                    <Button
                        onClick={() => iconsClickHandler(item.id)}
                        className='md:w-[30px] md:h-[30px] flex items-center justify-center'>
                        {clickIcon === item.id ? (
                            <Icon name={item.selectedIcon} />
                        ) : (
                            <Icon name={item.icon} />
                        )}
                    </Button>
                    {item.id === 1 && (<SearchModal openSearch={openSearch} setOpenSearch={setOpenSearch} />)}
                </React.Fragment>
            ))}
        </div>
    );
}

export default HeaderIcons;