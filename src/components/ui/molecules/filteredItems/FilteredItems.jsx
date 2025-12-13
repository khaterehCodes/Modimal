import React, { useState } from "react";
import Image from "../../atom/customImage/Image";
import P from "../../atom/customP/P";
import Filters from "../filters/Filters";
import { useWish } from '../../../../core/context/wishContext/WishContext';
import Icon from '../../atom/icons/Icon';
import Button from "../../atom/customButton/Button";
import { Link, useNavigate } from "react-router-dom";
import FilterNames from "../filterNames/FilterNames";

function FilteredItems({ filterItems }) {
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
    const { wishList, wishHandler } = useWish();
    const navigate = useNavigate();
    return (
        <div className="md:w-[1350px] h-auto flex md:flex-row flex-col justify-between items-start">
            <div className="md:w-[400px] h-auto">
                <Filters clearAllFilters={clearAllFilters}
                    removeFilterName={removeFilterName}
                    selectFilterHandler={selectFilterHandler}
                    selectedFilter={selectedFilter}
                    clickFilterHandler={clickFilterHandler}
                    openFilter={openFilter}
                    setOpenFilter={setOpenFilter}
                />
            </div>
            <div className="md:hidden w-full h-auto flex flex-col">
                <div className="w-full h-[60px]">
                    <Button
                        onClick={() => navigate('/filterRes')}
                        className='w-[200px] h-[30px] flex items-center justify-center gap-1'>
                        <Icon name={'filterIcon'} />
                        <P>Filter</P>
                    </Button>
                </div>
                <div className="md:hidden flex">
                    <FilterNames clearAllFilters={clearAllFilters} removeFilterName={removeFilterName} selectedFilter={selectedFilter} />
                </div>
            </div>
            <div className="md:w-[850px] w-full h-auto flex flex-wrap items-center justify-between gap-4 md:gap-0">
                {filterItems.map((item) => {
                    const IsWish = wishList.some(W => W.id === item.id)
                    return (
                        <React.Fragment key={item.id}>
                            <Link to={`/products/${item.id}`}>
                                <div className="md:w-[400px] w-[150px] h-[340px] md:h-[540px] flex flex-col">
                                    <div className='relative'>
                                        <Image src={item.img} className='w-full h-[210px] md:h-[430px]' />
                                        <div
                                            onClick={() => wishHandler(item)}
                                            className='absolute md:right-[25px] right-[10px] top-[10px] md:top-[25px] cursor-pointer'>
                                            {IsWish ? (<Icon name={'redHeart'} />) : (<Icon name={'favoriteIcon'} />)}
                                        </div>
                                    </div>
                                    <P className='font-bold md:text-[16px] text-[14px]'>{item.name}</P>
                                    <div className="w-full h-[30px] flex items-center justify-between">
                                        <P className='md:text-[16px] text-[14px]'>{item.description}</P>
                                        <P className='font-bold md:flex hidden'>${item.price}</P>
                                    </div>
                                    <P className='md:hidden w-[130px] h-[30px] flex items-center justify-end text-[14px] font-bold'>${item.price}</P>
                                    <div className="md:w-auto h-[30px] flex items-center gap-2">
                                        {item.colors.map((C) => (
                                            <React.Fragment key={C.id}>
                                                <div className="md:w-[25px] w-[15px] h-[15px] md:h-[25px] rounded-full" style={{ backgroundColor: C.color }}></div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    );
}

export default FilteredItems;