import { useEffect, useState } from "react";
import FilteredItems from "../../molecules/filteredItems/FilteredItems";
import SearchFilter from "../../molecules/searchFilter/SearchFilter";
import { items } from "../../../../core/constants/items/Items";
import { UseSearch } from "../../../../core/context/searchContext/SearchContext";
import P from "../../atom/customP/P";

function FilterPageOragnisms() {
    const [filterItems, setFilterItems] = useState([]);
    const { searchValue } = UseSearch();
    useEffect(() => {
        if (searchValue.trim() === '') {
            setFilterItems([])
            return;
        }
        const filtered = items.filter(item => item.category.toLowerCase().includes(searchValue.toLowerCase()));
        setFilterItems(filtered);
    }, [searchValue])
    return (
        <div className="w-full h-auto flex flex-col items-center gap-3 md:mb-[50px]">
            <SearchFilter />
            <div className="md:w-[1350px] md:h-[100px] flex items-center justify-center">
                <P className='md:text-[20px]'>{filterItems.length} items</P>
            </div>
            <FilteredItems filterItems={filterItems} />
        </div>
    );
}

export default FilterPageOragnisms;