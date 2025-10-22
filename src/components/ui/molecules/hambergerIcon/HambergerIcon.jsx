import { useState } from "react";
import Button from "../../atom/customButton/Button";
import Icon from "../../atom/icons/Icon";
import HeaderMenuRes from "../headerMenuRes/HeaderMenuRes";

function HambergerIcon() {
    const [clickHamberger, setClickHamberger] = useState(false)
    return (
        <>
            <div className="md:hidden w-[60px] h-[30px] flex items-center justify-between">
                <Button onClick={() => setClickHamberger(!clickHamberger)}>
                    {clickHamberger ? (<Icon name={'closeHamberger'} />) : (<Icon name={'hamberger'} />)}
                </Button>
                <Icon name={'searchIcon'} />
            </div>
            <HeaderMenuRes  clickHamberger={clickHamberger} setClickHamberger={setClickHamberger}/>
        </>
    );
}

export default HambergerIcon;