import P from "../../atom/customP/P";
import HambergerIcon from "../../molecules/hambergerIcon/HambergerIcon";
import HeaderIconRes from "../../molecules/headerIconRes/HeaderIconRes";
import HeaderIcons from "../../molecules/headerIcons/HeaderIcons";
import HeaderTabs from "../../molecules/headerTabs/HeaderTabs";
import Logo from "../../molecules/logo/Logo";

function HeaderOrganisms() {
    return (
        <div className="w-full md:h-[110px] h-[75px]">
            <div className="w-full h-[15px] md:h-[30px] bg-[#5A6D57] flex items-center justify-center">
                <P className='md:text-[12px] text-[10px] text-white font-semibold'>Enjoy Free Shipping On All Orders</P>
            </div>
            <div className="md:w-full md:h-[80px] flex items-center justify-center">
                <div className="md:w-[1350px] w-[330px] h-[60px] md:h-full flex items-center justify-between">
                    <HambergerIcon />
                    <Logo />
                    <HeaderIconRes />
                    <HeaderTabs />
                    <HeaderIcons />
                </div>
            </div>
        </div>
    );
}

export default HeaderOrganisms;