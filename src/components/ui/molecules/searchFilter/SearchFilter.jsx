import { UseSearch } from "../../../../core/context/searchContext/SearchContext";
import Button from "../../atom/customButton/Button";
import Input from "../../atom/customInput/Input";
import Icon from "../../atom/icons/Icon";

function SearchFilter() {
    const { searchValue, setSearchValue } = UseSearch();
    return (
        <div className="md:w-[1350px] w-[330px] md:h-[60px] border-b border-[#ADADAD] p-2 flex items-center gap-2">
            <div className="md:flex hidden">
                <Icon name={'graySerachIcon'} />
            </div>
            <div className="md:hidden">
                <Icon name={'graySerachIconSM'} />
            </div>
            <Input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder='Search' className='md:w-[1280px] w-[260px] md:h-full outline-none' />
            <Button onClick={() => setSearchValue('')}>
                {searchValue !== '' ? (<Icon name={'cleanInput'} />) : ''}
            </Button>
        </div>
    );
}

export default SearchFilter;