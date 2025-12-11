import { useParams } from "react-router-dom";
import { items } from "../../../../core/constants/items/Items";
import DetailPathName from "../../molecules/detailPathName/DetailPathName";
import DetailsPicture from "../../molecules/detailsPicture/DetailsPicture";
import DetailInfo from "../../molecules/detailInfo/DetailInfo";
import DetailDescription from "../../molecules/detailDescription/DetailDescription";
import MayAlsoLike from "../../molecules/mayAlsoLike/MayAlsoLike";

function DetailPageOrganisms() {
    const { id } = useParams()
    const findItems = items.find(item => item.id === Number(id))
    return (
        <div className="w-full h-auto flex items-center justify-center flex-col">
            <div className="md:w-[1350px] md:h-[100px] flex items-center md:gap-2">
                <DetailPathName findItems={findItems} />
            </div>
            <div className="md:w-[1350px] md:h-[550px] flex justify-between">
                <DetailsPicture findItems={findItems} />
                <DetailInfo findItems={findItems} />
            </div>
            <DetailDescription />
            <MayAlsoLike />
        </div>
    );
}

export default DetailPageOrganisms;