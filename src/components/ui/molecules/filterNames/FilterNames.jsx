import React from 'react';
import P from '../../atom/customP/P';
import Button from '../../atom/customButton/Button';
import Icon from '../../atom/icons/Icon';
function FilterNames({ clearAllFilters, removeFilterName, selectedFilter }) {
    return (
        <div className='md:w-full md:h-auto md:flex flex-col md:gap-2 md:mb-[20px]'>
            <div className='md:w-full md:h-auto flex flex-wrap justify-between items-center md:gap-3'>
                {Object.keys(selectedFilter).length > 0 && (
                    Object.entries(selectedFilter).map(([key, value]) => (
                        <React.Fragment key={key}>
                            <div className='w-[180px] md:h-[40px] md:p-2 flex items-center justify-center bg-[#D1D9CF] md:gap-5'>
                                <P>{value}</P>
                                <Button onClick={() => removeFilterName(key)}>
                                    <Icon name={'removeFilterName'} />
                                </Button>
                            </div>
                        </React.Fragment>
                    ))
                )}
            </div>
            <div className='md:w-full md:h-[40px] md:flex items-center justify-between hidden'>
                <Button onClick={clearAllFilters} className='md:w-1/2 md:h-full text-[#748C70] bg-white'>Clear All Filters</Button>
                <Button className='md:w-1/2 md:h-full bg-[#748C70] text-white'>applied filters</Button>
            </div>
        </div>
    );
}

export default FilterNames;