import React, { useState } from 'react';
import { productDescription } from '../../../../core/constants/productDescription/ProductDescription';
import P from '../../atom/customP/P';
import Icon from '../../atom/icons/Icon';
import Button from '../../atom/customButton/Button';
function ProductDescription() {
    const [openDescription, setOpenDescription] = useState([])
    const descriptionsHandler = (id) => {
        if (openDescription.includes(id)) {
            setOpenDescription(openDescription.filter((item) => item !==id))
        } else {
            setOpenDescription([...openDescription, id])
        }
    }
    return (
        <div className="md:w-full md:h-auto bg-[#F0F2EF] border-[#CBCBCB] border">
            {productDescription.map((item) => {
                const IsOpen = openDescription.includes(item.id)
                return (
                    <React.Fragment key={item.id}>
                        <div className='md:w-full md:h-auto border-b-[#CBCBCB] border-b-[1px]'>
                            <div className='w-full h-[80px] p-3 flex items-center justify-between'>
                                <P className={`md:text-[20px] font-bold ${IsOpen ? 'text-[#748C70]':'text-black'}`}>{item.title}</P>
                                <Button onClick={()=>descriptionsHandler(item.id)}>
                                    {IsOpen ? <Icon name={'closeFilter'} /> : <Icon name={'openDescription'} />}
                                </Button>
                            </div>
                            <div>
                                {IsOpen && (
                                    <P className='p-3'>{item.description}</P>
                                )}
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    );
}

export default ProductDescription;