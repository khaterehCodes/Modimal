import { Link } from "react-router-dom";
import P from "../../atom/customP/P";

function DetailPathName({ findItems }) {
    return (
        <div className="md:w-[280px] md:h-full flex items-center justify-between">
            <Link to={'/'}>
                <P className='text-[#748C70] text-[18px]'>Home</P>
            </Link>
            <P className='text-[#606060]'>/</P>
            <P className='text-[#748C70] text-[18px]'>{findItems.category}</P>
            <P className='text-[#606060]'>/</P>
            <P className='text-[18px]'>{findItems.name}</P>

        </div>
    );
}

export default DetailPathName;