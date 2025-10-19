import P from '../../atom/customP/P';
import Icon from '../../atom/icons/Icon';
function CopyRight() {
    return (
        <div className="w-[300px] md:w-[1350px] flex items-center gap-1">
            <div className='md:flex hidden'>
                <Icon name={'copyright'} />
            </div>
            <div className='md:hidden'>
                <Icon name={'mdCopyright'} />
            </div>
            <P className='text-[#CBCBCB] md:text-[12px] text-[10px]'>2023 modimal. All Rights Reserved.</P>
        </div>
    );
}

export default CopyRight;