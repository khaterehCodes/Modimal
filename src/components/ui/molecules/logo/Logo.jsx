import P from "../../atom/customP/P";
import Icon from "../../atom/icons/Icon";
import { Link } from 'react-router-dom';
function Logo() {
    return (
        <>
            <div className="hidden md:w-[160px] md:h-[50px] md:flex flex-col items-center justify-center">
                <Link to='/'>
                    <Icon name={'lgLogo'} />
                </Link>
                <P className='text-[#404040] md:text-[12px]'>women clothing</P>
            </div>
            <div className="md:hidden w-[130px] h-[40px] flex flex-col items-center justify-center">
                <Link to='/'>
                    <Icon name={'mdLogo'} />
                </Link>
                <P className='text-[#404040] text-[10px]'>women clothing</P>
            </div>
        </>
    );
}

export default Logo;