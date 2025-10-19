import P from '../../atom/customP/P';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
function CopyRight() {
    return (
        <div className="md:w-[1350px] flex items-center md:gap-1 relative">
            <Icon name={'copyright'} />
            <P className='text-[#CBCBCB] md:text-[12px]'>2023 modimal. All Rights Reserved.</P>
            <Button className='absolute md:right-0 md:bottom-7'>
                <Icon name={'chatFooter'}/>
            </Button>
        </div>
    );
}

export default CopyRight;