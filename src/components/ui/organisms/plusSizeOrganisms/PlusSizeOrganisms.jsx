import { Link } from "react-router-dom";
import P from "../../atom/customP/P";
import Image from "../../atom/customImage/Image";
import FilteredItems from "../../molecules/filteredItems/FilteredItems";
import { useState } from "react";
import PlusSize from "../../molecules/plusSize/PlusSize";

function PlusSizeOrganisms() {
    const [filterItems, setFilterItems] = useState([])
    return (
        <div className="w-full h-auto flex items-center justify-center flex-col">
            <div className="md:w-[1350px] h-auto flex flex-col md:gap-5">
                <div className="w-full md:h-[100px] flex items-center md:gap-5">
                    <Link to='/'>
                        <P className='text-[#748C70] text-[18px]'>Home</P>
                    </Link>
                    <P className='text-[#606060]'>/</P>
                    <P className='text-[18px]'>Plus Size</P>
                </div>
            </div>
            <Image src='/assets/images/plusSize.png' className='w-full md:h-[660px]' />
            <div className="md:w-[1350px] h-auto flex justify-between md:mt-[30px] md:mb-[50px]">
                <div className="md:w-[400px] md:h-auto">
                    <FilteredItems filterItems={filterItems} />
                </div>
                <div className="md:w-[900px] md:h-auto">
                    <PlusSize />
                </div>
            </div>
        </div>
    );
}

export default PlusSizeOrganisms;