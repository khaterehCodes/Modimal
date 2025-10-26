import React, { useState } from "react";
import { headerIcons } from "../../../../core/constants/headerIcons/HeaderIcons";
import Icon from "../../atom/icons/Icon";
import { Link } from "react-router-dom";
import Button from "../../atom/customButton/Button";

function HeaderIconRes() {
    const [clickIcon, setClickIcon] = useState(null)
    const iconsClickHandler = (id) => {
        setClickIcon((prev) => prev === id ? null : id)
    }
    return (
        <div className="md:hidden w-[60px] h-[30px] flex items-center justify-between">
            {headerIcons.slice(2,4).map((item) => (
                <React.Fragment key={item.id}>
                    {item.Linked ? (
                        <Link to={item.Linked}>
                            <Button
                                onClick={() => iconsClickHandler(item.id)}
                                className='w-[30px] h-[30px] flex items-center justify-center'>
                                {clickIcon === item.id ? (
                                    <Icon name={item.selectedIcon} />
                                ) : (
                                    <Icon name={item.icon} />
                                )}
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            onClick={() => iconsClickHandler(item.id)}
                            className='w-[30px] h-[30px] flex items-center justify-center'>
                            {clickIcon === item.id ? (
                                <Icon name={item.selectedIcon} />
                            ) : (
                                <Icon name={item.icon} />
                            )}
                        </Button>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
export default HeaderIconRes;