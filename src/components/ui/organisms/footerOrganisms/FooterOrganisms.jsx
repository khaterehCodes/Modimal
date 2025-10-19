import FooterEmail from "../../molecules/footerEmail/FooterEmail";
import CopyRight from "../../molecules/copyRight/CopyRight";
import AboutMdimal from "../../molecules/aboutmodimal/AboutMdimal";
import HelpFooter from "../../molecules/helpFooter/HelpFooter";
import JoinUpFooter from "../../molecules/joinupfooter/JoinUpFooter";
function FooterOrganisms() {
    return (
        <div className="md:w-full md:h-[420px] bg-[#404040] flex flex-col items-center justify-around">
            <div className="md:w-[1350px] h-[300px] flex justify-between">
                <FooterEmail />
                <AboutMdimal />
                <HelpFooter />
                <JoinUpFooter />
            </div>
            <CopyRight />
        </div>
    );
}

export default FooterOrganisms;