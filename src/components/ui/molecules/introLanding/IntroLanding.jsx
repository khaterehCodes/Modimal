import Image from '../../atom/customImage/Image';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
function IntroLanding() {
    return (
        <div className="md:w-[1350px] h-[610px] relative">
            <Image src={'/assets/images/introPic.png'} />
            <div className='absolute bottom-[180px] md:left-[100px]'>
                <Icon name={'landingText'}/>
            </div>
            <Button className='md:w-[190px] h-[40px] bg-white md:text-[14px] absolute bottom-[100px] left-[100px]'>New In</Button>
        </div>
    );
}

export default IntroLanding;