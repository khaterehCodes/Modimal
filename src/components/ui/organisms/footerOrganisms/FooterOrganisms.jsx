import FooterEmail from "../../molecules/footerEmail/FooterEmail";
import CopyRight from "../../molecules/copyRight/CopyRight";
import AboutMdimal from "../../molecules/aboutmodimal/AboutMdimal";
import HelpFooter from "../../molecules/helpFooter/HelpFooter";
import JoinUpFooter from "../../molecules/joinupfooter/JoinUpFooter";
import SocialMediaFooter from "../../molecules/socialMediaFooter/SocialMediaFooter";
function FooterOrganisms() {
    return (
        <div className="w-full h-[650px] md:w-full md:h-[420px] bg-[#404040] flex flex-col items-center justify-around">
            <div className="w-full h-[550px] md:w-[1350px] md:h-[300px] flex md:flex-row flex-wrap justify-between">
                <FooterEmail />
                <AboutMdimal />
                <HelpFooter />
                <JoinUpFooter />
            </div>
            <SocialMediaFooter />
            <CopyRight />
        </div>
    );
}

export default FooterOrganisms;