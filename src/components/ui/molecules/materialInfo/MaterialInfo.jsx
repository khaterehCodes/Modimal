import React from "react";
import { silkFeatures } from "../../../../core/constants/silkFeatures/SilkFeatures";
import P from "../../atom/customP/P";

function MaterialInfo() {
    return (
        <div className="md:w-full md:h-full bg-[#F0F2EF] md:p-4 border border-[#ADADAD] flex flex-col gap-4">
            <P className='md:text-[20px]'>Silk</P>
            <div className="md:w-full md:h-[1px] bg-[#ADADAD]"></div>
            <P className='md:text-[18px] md:w-full md:h-[130px] flex items-center'>This Material Is Our Signature High-Stretch Fabric That Drapes Like Silk And Is Soft To The Touch. Silk Is OEKO-TEX® Certified And Made In Italy In A Mill 100% Powered By Renewable Energy (Solar And Biomass)</P>
            <div className="md:w-full md:h-[80px] flex items-center gap-3">
                {silkFeatures.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="w-auto h-[40px] bg-white p-5 flex items-center justify-center">
                            <P className='text-[14px]'>{item.feature}</P>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default MaterialInfo;