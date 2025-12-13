import { Link } from 'react-router-dom';
import P from '../../atom/customP/P';
import SaturdayPart from '../../molecules/saturdayPart/SaturdayPart';
import ModiWeek from '../../molecules/modiWeek/ModiWeek';
function ModiWeekOrganisms() {
    return (
        <div className="w-full h-auto flex items-center justify-center flex-col">
            <div className="md:w-[1350px] h-auto flex flex-col md:gap-5">
                <div className="w-full md:h-[100px] flex items-center md:gap-5">
                    <Link to='/'>
                        <P className='text-[#748C70] text-[18px]'>Home</P>
                    </Link>
                    <P className='text-[#606060]'>/</P>
                    <P className='text-[18px]'>Modiweek</P>
                </div>
            </div>
            <div className='md:w-[1350px] md:h-auto flex flex-col md:gap-5'>
                <P className='md:text-[32px] font-semibold'>Saturday</P>
                <div className='md:w-full md:h-[750px]'>
                    <SaturdayPart />
                </div>
                <ModiWeek />
            </div>
        </div>
    );
}

export default ModiWeekOrganisms;