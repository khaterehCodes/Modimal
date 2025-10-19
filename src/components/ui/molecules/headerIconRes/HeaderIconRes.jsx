import Icon from "../../atom/icons/Icon";

function HeaderIconRes() {
    return (
        <div className="md:hidden w-[60px] h-[30px] flex items-center justify-between">
            <Icon name={'favoriteIcon'} />
            <Icon name={'basketIcon'} />
        </div>
    );
}

export default HeaderIconRes;