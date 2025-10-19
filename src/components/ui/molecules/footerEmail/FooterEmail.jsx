import P from "../../atom/customP/P";
import Input from '../../atom/customInput/Input';
import Icon from "../../atom/icons/Icon";
import { socialMedias } from "../../../../core/constants/socialMedias/SocialMedias";
import React from "react";
function FooterEmail() {
    return (
        <div className="md:w-[500px] md:h-full flex flex-col justify-between">
            <div className="md:w-[500px] md:h-[160px] flex flex-col justify-between">
                <P className='text-white md:font-bold md:text-[20px]'>Join our club, get 15% off for your Birthday</P>
                <div className="md:w-full md:h-[40px] border border-[#D1D9CF] flex items-center justify-between p-2">
                    <Input className='md:w-[400px] md:h-full outline-none bg-[#404040]' placeholder='Enter Your Email Address' />
                    <Icon name={'rightArrow'} />
                </div>
                <div className="md:w-full md:h-[40px] flex items-center md:gap-2">
                    <div className="md:w-[18px] md:h-[18px] border border-[#F0F2EF] bg-white"></div>
                    <P className='text-white md:font-semibold text-[12px] md:w-[380px] md:h-full'>By Submittng your email, you agree to receive advertising emails from Modimal.</P>
                </div>
            </div>
            <div className="md:w-[145px] md:h-[30px] flex items-center justify-between">
                {socialMedias.map((item, index) => (
                    <React.Fragment key={index}>
                        <Icon name={item} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default FooterEmail;