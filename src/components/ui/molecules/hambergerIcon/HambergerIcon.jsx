import Button from "../../atom/customButton/Button";
import Icon from "../../atom/icons/Icon";

function HambergerIcon() {
    return (
        <div className="md:hidden w-[60px] h-[30px] flex items-center justify-between">
            <Button>
                <Icon name={'hamberger'}/>
            </Button>
            <Icon name={'searchIcon'}/>
        </div>
    );
}

export default HambergerIcon;