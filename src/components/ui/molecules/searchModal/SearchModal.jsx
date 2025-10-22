import Icon from "../../atom/icons/Icon";
import Input from '../../atom/customInput/Input';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchModal({ openSearch, setOpenSearch }) {
    const navigate = useNavigate();
    const [valueInput, setValueinput] = useState('')
    const serachInputHandler = (event) => {
        setValueinput(event.target.value)
        if (valueInput.trim() !== '') {
            navigate('/filter')
            setOpenSearch(false)
        }
    }
    if (openSearch) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    return (
        <>
            {openSearch && (
                <div className="flex fixed inset-0 z-50 md:mt-[110px] mt-[70px] backdrop-blur-md bg-[#0000007A] cursor-pointer">
                    <div className="w-full md:h-[150px] h-[80px] bg-white flex items-center justify-center">
                        <div className="md:w-[1350px] w-[330px] md:h-[60px] border-b border-[#ADADAD] p-2 flex items-center gap-2">
                            <div className="md:flex hidden">
                                <Icon name={'graySerachIcon'} />
                            </div>
                            <div className="md:hidden">
                                <Icon name={'graySerachIconSM'} />
                            </div>
                            <Input onChange={serachInputHandler} placeholder='Search' className='md:w-[1300px] md:h-full' />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchModal;