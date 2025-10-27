import React, { useState } from 'react';
import Button from '../../atom/customButton/Button';
import Icon from '../../atom/icons/Icon';
import Input from '../../atom/customInput/Input';
import P from '../../atom/customP/P';
import { filteres } from '../../../../core/constants/filters/Filteres';
import { useNavigate } from 'react-router-dom';
function FiltersItemRes({ clearAllFilters, selectFilterHandler, selectedFilter, clickFilterHandler, openFilter, setOpenFilter, setSelectedFilter }) {
    const navigate = useNavigate();
    return (
        <div className='md:w-[400px] w-full h-auto flex md:flex-row flex-col'>
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
            <div className='w-[340px] h-[50px] bg-green-300 flex md:hidden mt-[100px]'>
                <Button
                    onClick={clearAllFilters}
                    className='w-1/2 h-full text-[#5A6D57] bg-white'>
                    Clear filter
                </Button>
                <Button
                    onClick={() => navigate('/filter')}
                    className='w-1/2 h-full bg-[#5A6D57] text-white'>
                    Apply filter
                </Button>
            </div>
        </div >
    );
}

export default FiltersItemRes;