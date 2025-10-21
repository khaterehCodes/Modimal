import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
function IntroLanding() {
    return (
        <div className="md:w-[1350px] h-[610px] relative">
            <Image src={'/assets/images/introPic.png'} className='hidden md:flex' />
            <Image src={'/assets/images/introPicRes.png'} className='md:hidden' />
            <div className='absolute bottom-[180px] md:left-[100px] hidden md:flex'>
                <Icon name={'landingText'} />
            </div>
            <div className='absolute bottom-[150px] left-[10px] md:hidden'>
                <Icon name={'landingTextSmall'} />
            </div>
            <Button className='md:w-[190px] h-[40px] w-[70px] bg-white md:text-[14px] absolute md:bottom-[100px] bottom-[70px] md:left-[100px] left-[10px]'>New In</Button>
        </div>
    );
}

export default IntroLanding;