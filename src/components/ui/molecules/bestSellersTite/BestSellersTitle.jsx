import P from '../../atom/customP/P';
import Button from '../../atom/customButton/Button';
function BestSellersTitle() {
    return (
        <div className="w-full md:h-[50px] flex items-center justify-between">
            <P className='md:text-[32px] font-semibold'>Best Sellers</P>
            <Button className='w-[100px] h-[40px] text-[#5A6D57]'>view all</Button>
        </div>
    );
}

export default BestSellersTitle;