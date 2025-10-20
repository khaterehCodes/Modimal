import P from "../../atom/customP/P";
import Input from '../../atom/customInput/Input';
import Icon from "../../atom/icons/Icon";
function FooterEmail() {
    return (
        <div className="w-full h-[150px] md:w-[500px] md:h-[160px] flex flex-col justify-between md:items-start items-center">
            <P className='text-white md:font-bold md:text-[20px] font-semibold text-[14px]'>Join our club, get 15% off for your Birthday</P>
            <div className="w-[330px] md:w-full h-[40px] border border-[#D1D9CF] flex items-center justify-between p-2">
                <Input className='w-[280px] md:w-[400px] md:h-full outline-none bg-[#404040]' placeholder='Enter Your Email Address' />
                <Icon name={'rightArrow'} />
            </div>
            <div className="w-[330px] md:w-full h-[40px] flex items-center gap-2">
                <div className="w-[18px] h-[18px] border border-[#F0F2EF] bg-white"></div>
                <P className='text-white md:font-semibold text-[12px] md:w-[380px] md:h-full'>By Submittng your email, you agree to receive advertising emails from Modimal.</P>
            </div>
        </div>
    );
}

export default FooterEmail;