import React, { useState } from "react";
import Image from "../../atom/customImage/Image";

function DetailsPicture({ findItems }) {
    const [selectedPic, setSelectedPic] = useState(0)
    const pictureHandler = (index) => {
        selectedPic(index)
    }
    return (
        <div className="md:w-[600px] md:h-[515px] flex justify-between">
            <div className="md:w-[150px] md:h-[515px] overflow-auto flex flex-col md:gap-3">
                {findItems.detailImg.map((item, index) => (
                    <React.Fragment key={index}>
                        <div
                            onClick={() => setSelectedPic(index)}
                            className="md:w-full md:h-[160px]">
                            <Image src={item} className={`md:w-full md:h-[160px] cursor-pointer ${selectedPic===index ? '':'opacity-40 bg-[#D9D9D9]'}`} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="md:w-[430px] md:h-[515px]">
                <Image src={findItems.img} className='md:w-[430px] md:h-full' />
            </div>
        </div>
    );
}

export default DetailsPicture;