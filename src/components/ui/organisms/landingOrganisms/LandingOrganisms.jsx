import BestSellerRes from "../../molecules/bestSellerRes/BestSellerRes";
import Collections from "../../molecules/collections/Collections";
import IntroLanding from "../../molecules/introLanding/IntroLanding";
import LandingBanner from "../../molecules/landingBanner/LandingBanner";
import ModiWeek from "../../molecules/modiWeek/ModiWeek";
import ModiWeekRes from "../../molecules/modiWeekRes/ModiWeekRes";
import SocialModimal from "../../molecules/socialModimal/SocialModimal";
import BestSellers from "../bestSellers/BestSellers";

function LandingOrganisms() {
    return (
        <div className="w-full h-auto flex flex-col items-center md:gap-10">
            <IntroLanding />
            <BestSellers />
            <BestSellerRes />
            <Collections />
            <ModiWeek />
            <ModiWeekRes />
            <LandingBanner />
            <SocialModimal />
        </div>
    );
}

export default LandingOrganisms;