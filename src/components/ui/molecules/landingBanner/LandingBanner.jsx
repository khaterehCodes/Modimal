import Button from '../../atom/customButton/Button';
import Image from '../../atom/customImage/Image';
import P from '../../atom/customP/P';
function LandingBanner() {
    return (
        <div className='w-full md:h-[520px] relative md:mt-[30px]'>
            <Image src={'/assets/images/landingBanner.jpg'} className='md:w-full md:h-full' />
            <P className='md:w-[435px] md:h-[70px] absolute text-[#272F25] md:text-[20px] md:right-[70px] md:bottom-[100px]'>
                Stylish sustainability in clothing promotes eco-friendly choices for a greater future
            </P>
            <Button className='md:w-[185px] h-[40px] bg-white absolute md:right-[70px] md:bottom-[40px]'>Sustainability</Button>
        </div>
    );
}

export default LandingBanner;