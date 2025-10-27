import { useState } from "react";
import Button from "../../atom/customButton/Button";
import Icon from "../../atom/icons/Icon";
import HeaderMenuRes from "../headerMenuRes/HeaderMenuRes";
import SearchModal from "../searchModal/SearchModal";

function HambergerIcon({ openSearch, setOpenSearch }) {
    const [clickHamberger, setClickHamberger] = useState(false)
    return (
        <>
            <div className="md:hidden w-[60px] h-[30px] flex items-center justify-between">
                <Button onClick={() => setClickHamberger(!clickHamberger)}>
                    {clickHamberger ? (<Icon name={'closeHamberger'} />) : (<Icon name={'hamberger'} />)}
                </Button>
                <Button onClick={() => setOpenSearch(!openSearch)}>
                    {openSearch ? (<Icon name={'closeIcon'} />) : (<Icon name={'searchIcon'} />)}
                </Button>
            </div>
            <HeaderMenuRes clickHamberger={clickHamberger} setClickHamberger={setClickHamberger} />
            <SearchModal openSearch={openSearch} setOpenSearch={setOpenSearch} />
        </>
    );
}

export default HambergerIcon;