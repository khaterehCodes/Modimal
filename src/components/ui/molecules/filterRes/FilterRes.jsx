import { useNavigate } from "react-router-dom";
import Button from "../../atom/customButton/Button";
import P from "../../atom/customP/P";
import Icon from "../../atom/icons/Icon";
import FiltersItemRes from "../filtersItemRes/FiltersItemRes";
import { useState } from "react";

function FilterRes({ clearAllFilters, selectFilterHandler, selectedFilter, setSelectedFilter, clickFilterHandler, openFilter, setOpenFilter }) {
    const navigate = useNavigate();
    return (
        <div className="w-full h-auto  p-2 flex flex-col gap-5">
            <div className="w-full h-[50px] flex items-center justify-between p-2">
                <P className='text-[24px] font-bold'>Filters</P>
                <Button onClick={() => navigate('/filter')}>
                    <Icon name={'closeIcon'} />
                </Button>
            </div>
            <div>
                <FiltersItemRes clearAllFilters={clearAllFilters}
                    selectFilterHandler={selectFilterHandler}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    clickFilterHandler={clickFilterHandler}
                    openFilter={openFilter}
                    setOpenFilter={setOpenFilter}
                />
            </div>
        </div>
    );
}

export default FilterRes;