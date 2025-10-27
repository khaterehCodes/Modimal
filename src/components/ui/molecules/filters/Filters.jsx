import React, { useState } from 'react';
import P from '../../atom/customP/P';
import { filteres } from '../../../../core/constants/filters/Filteres';
import Button from '../../atom/customButton/Button';
import Icon from '../../atom/icons/Icon';
import Input from '../../atom/customInput/Input';
import FilterNames from '../filterNames/FilterNames';
function Filters({ clearAllFilters, removeFilterName, selectFilterHandler, selectedFilter, clickFilterHandler, openFilter, setOpenFilter }) {
    return (
        <div className='md:w-[400px] w-full h-auto md:flex flex-col hidden'>
            <P className='font-semibold md:text-[32px] md:flex hidden'>Filters</P>
            <FilterNames clearAllFilters={clearAllFilters} removeFilterName={removeFilterName} selectedFilter={selectedFilter} />
            <div className='md:w-full md:h-auto flex flex-col gap-3'>
                {filteres.map((item) => (
                    <React.Fragment key={item.id}>
                        {openFilter[item.id] ? (
                            <div className='w-full md:h-auto border border-[#748C70] flex flex-col md:gap-2 md:p-3 p-2'>
                                <div className='w-full h-[50px] flex items-center justify-between'>
                                    <P className='text-[#748C70] font-bold'>{item.filterName}</P>
                                    <Button onClick={() => setOpenFilter(item.id)}>
                                        <Icon name={'closeFilter'} />
                                    </Button>
                                </div>
                                {item.filters.map((F) => (
                                    <React.Fragment key={F.id}>
                                        <div className='w-full md:h-[30px] p-2 flex items-center gap-2'>
                                            <Input type='radio'
                                                name={`filter${F.id}`}
                                                checked={selectedFilter[item.id] === F.title}
                                                onChange={() => selectFilterHandler(item.id, F.title)}
                                                className='cursor-pointer' />
                                            {item.filterName === 'Color' ? (
                                                <div className='w-[20px] h-[20px] rounded-full' style={{ backgroundColor: F.title }}></div>
                                            ) : (
                                                <P>{F.title}</P>
                                            )}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <div className='md:w-[400px] w-[340px] h-[40px] md:h-[50px] bg-[#748C70] flex items-center justify-between p-2'>
                                <P className='font-bold text-white'>{item.filterName}</P>
                                <Button onClick={() => clickFilterHandler(item.id)}>
                                    <Icon name={'openFilter'} />
                                </Button>
                            </div>
                        )}
                    </React.Fragment>
                ))
                }
            </div >
        </div >
    );
}
export default Filters;