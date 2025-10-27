import { useState } from "react";
import FilterRes from "../../molecules/filterRes/FilterRes";
import FilterNames from "../../molecules/filterNames/FilterNames";

function FilterResOrganisms() {
    const [openFilter, setOpenFilter] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
    const clickFilterHandler = (id) => {
        setOpenFilter((prev) => ({ ...prev, [id]: !prev[id] }))
    };
    const [selectedFilter, setSelectedFilter] = useState({});
    const selectFilterHandler = (id, item) => {
        setSelectedFilter((prev) => ({ ...prev, [id]: item }))
    }
    const removeFilterName = (id) => {
        setSelectedFilter((prev) => {
            const currentkey = { ...prev }
            delete currentkey[id]
            return currentkey
        })
    }
    const clearAllFilters = () => {
        setSelectedFilter({})
        setOpenFilter(false)
    }
    return (
        <div>
            <FilterNames clearAllFilters={clearAllFilters} removeFilterName={removeFilterName} selectedFilter={selectedFilter} />
            <FilterRes clearAllFilters={clearAllFilters}
                selectFilterHandler={selectFilterHandler}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                clickFilterHandler={clickFilterHandler}
                openFilter={openFilter}
                setOpenFilter={setOpenFilter} />
        </div>
    );
}
export default FilterResOrganisms;