import Icon from "../../atom/icons/Icon";
import Input from '../../atom/customInput/Input';
import { useNavigate } from "react-router-dom";
import { UseSearch } from "../../../../core/context/searchContext/SearchContext";
import Button from "../../atom/customButton/Button";
function SearchModal({ openSearch, setOpenSearch }) {
    const navigate = useNavigate();
    const { searchValue, setSearchValue } = UseSearch();
    const serachInputHandler = (event) => {
        setSearchValue(event.target.value)
        if (searchValue.trim() !== '') {
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
                            <Input onChange={serachInputHandler} value={searchValue} placeholder='Search' className='md:w-[1280px] md:h-full outline-none' />
                            <Button onClick={() => setSearchValue('')}>
                                {searchValue !== '' ? (<Icon name={'cleanInput'} />) : ''}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchModal;