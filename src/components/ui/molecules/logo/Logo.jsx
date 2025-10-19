import P from "../../atom/customP/P";
import Icon from "../../atom/icons/Icon";

function Logo() {
    return (
        <div className="md:w-[160px] md:h-[50px] flex flex-col items-center justify-center">
            <Icon name={'lgLogo'} />
            <P className='text-[#404040] md:text-[12px]'>women clothing</P>
        </div>
    );
}

export default Logo;