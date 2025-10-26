import { useWish } from "../../../../core/context/wishContext/WishContext";
import P from '../../atom/customP/P';
function WishLength() {
    const { wishList } = useWish();
    return (
        <div className="md:w-[1350px] w-full h-[100px] flex flex-col items-center justify-center gap-3">
            <P className='md:text-[20px] font-bold'>My Wish List</P>
            <P>{wishList.length} item</P>
        </div>
    );
}

export default WishLength;