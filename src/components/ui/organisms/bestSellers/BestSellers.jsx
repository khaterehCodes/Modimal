import BestSellerItems from "../../molecules/bestSellerItems/BestSellerItems";
import BestSellersTitle from "../../molecules/bestSellersTite/BestSellersTitle";

function BestSellers() {
    return (
        <div className="md:w-[1350px] md:h-[620px] flex flex-col justify-around">
            <BestSellersTitle />
            <BestSellerItems />
        </div>
    );
}

export default BestSellers;