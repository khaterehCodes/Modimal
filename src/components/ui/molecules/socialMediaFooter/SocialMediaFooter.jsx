import React from 'react';
import { socialMedias } from '../../../../core/constants/socialMedias/SocialMedias';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
function SocialMediaFooter() {
    return (
        <div className='w-[300px] md:w-[1350px] h-[50px] flex justify-between items-center'>
            <div className="md:w-[145px] w-[150px] md:h-[30px] flex items-center justify-between">
                {socialMedias.map((item, index) => (
                    <React.Fragment key={index}>
                        <Icon name={item} />
                    </React.Fragment>
                ))}
            </div>
            <Button className=''>
                <Icon name={'chatFooter'} />
            </Button>
        </div>
    );
}

export default SocialMediaFooter;