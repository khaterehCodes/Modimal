import Button from '../../atom/customButton/Button';
import Image from '../../atom/customImage/Image';
import P from '../../atom/customP/P';
function LandingBanner() {
    return (
        <div className='w-full md:h-[520px] relative md:mt-[30px] md:mb-0 mb-[30px]'>
            <Image src={'/assets/images/landingBanner.jpg'} className='md:w-full md:h-full md:flex hidden' />
            <Image src={'/assets/images/landingBannerRes.jpg'} className='w-full h-[410px] md:hidden' />
            <P className='md:w-[435px] w-[315px] md:h-[70px] h-[40px] absolute text-[#272F25] text-[14px] md:text-[20px] right-2 bottom-[70px] md:right-[70px] md:bottom-[100px]'>
                Stylish sustainability in clothing promotes eco-friendly choices for a greater future
            </P>
            <Button className='md:w-[185px] w-[150px] h-[40px] bg-white absolute md:right-[70px] md:bottom-[40px] bottom-[10px] right-[30px]'>Sustainability</Button>
        </div>
    );
}

export default LandingBanner;