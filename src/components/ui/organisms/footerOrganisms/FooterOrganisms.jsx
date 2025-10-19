import FooterEmail from "../../molecules/footerEmail/FooterEmail";
import CopyRight from "../../molecules/copyRight/CopyRight";
function FooterOrganisms() {
    return (
        <div className="md:w-full md:h-[420px] bg-[#404040] flex flex-col items-center justify-around">
            <div className="md:w-[1350px] h-[330px] bg-orange-500">
                <FooterEmail />
            </div>
            <CopyRight />
        </div>
    );
}

export default FooterOrganisms;