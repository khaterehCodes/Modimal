import IntroLanding from "../../molecules/introLanding/IntroLanding";
import BestSellers from "../bestSellers/BestSellers";

function LandingOrganisms() {
    return (
        <div className="w-full h-auto flex flex-col items-center md:gap-5">
            <IntroLanding />
            <BestSellers />
        </div>
    );
}

export default LandingOrganisms;