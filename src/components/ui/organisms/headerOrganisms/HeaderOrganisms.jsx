import P from "../../atom/customP/P";
import HeaderIcons from "../../molecules/headerIcons/HeaderIcons";
import HeaderTabs from "../../molecules/headerTabs/HeaderTabs";
import Logo from "../../molecules/logo/Logo";

function HeaderOrganisms() {
    return (
        <div className="md:w-full md:h-[110px]">
            <div className="md:w-full md:h-[30px] bg-[#5A6D57] flex items-center justify-center">
                <P className='md:text-[12px] text-white font-semibold'>Enjoy Free Shipping On All Orders</P>
            </div>
            <div className="md:w-full md:h-[80px] flex items-center justify-center">
                <div className="md:w-[1350px] md:h-full flex items-center justify-between">
                    <Logo />
                    <HeaderTabs />
                    <HeaderIcons />
                </div>
            </div>
        </div>
    );
}

export default HeaderOrganisms;