import MaterialInfo from "../materialInfo/MaterialInfo";
import ProductDescription from "../productDescription/ProductDescription";

function DetailDescription() {
    return (
        <div className="md:w-[1350px] md:h-auto flex justify-between">
            <div className="md:w-[650px] md:h-auto">
                <div className="md:w-full md:h-auto">
                    <ProductDescription />
                </div>
            </div>
            <div className="md:w-[650px] md:h-[335px]">
                <MaterialInfo />
            </div>
        </div>
    );
}

export default DetailDescription;