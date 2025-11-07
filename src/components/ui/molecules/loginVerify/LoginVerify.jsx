import { Link } from "react-router-dom";
import Button from "../../atom/customButton/Button";
import P from "../../atom/customP/P";
import Icon from "../../atom/icons/Icon";

function LoginVerify({ showVerify, setShowVerify }) {
    return (
        <>
            {showVerify && (
                <div className="flex fixed inset-0 z-50 backdrop-blur-md bg-[#0000007A] items-center justify-center">
                    <div className="md:w-[860px] w-[320px] h-[280px] p-3 md:h-[450px] bg-white md:p-5 flex flex-col justify-around items-center">
                        <div className="w-full md:h-[50px] flex items-center justify-start">
                            <Button onClick={() => setShowVerify(false)}>
                                <Icon name={'closeIcon'} />
                            </Button>
                        </div>
                        <div className="w-full md:h-[60px] flex items-center justify-center md:text-[32px] font-semibold">
                            <P>Welcome To Modimal</P>
                        </div>
                        <div className="w-full md:h-[60px] flex items-center justify-center md:text-[24px] italic">
                            <P>Elegance In Simplicity, Earth’s Harmony</P>
                        </div>
                        <div className="w-full md:h-[60px] flex items-center justify-center md:text-[24px] font-semibold">
                            <P>Is It Your First Experience On Modimal?</P>
                        </div>
                        <Link to='/'>
                            <Button className='md:w-[400px] w-[170px] md:h-[45px] h-[40px] bg-[#5A6D57] text-white'>
                                Create Your Own Style
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default LoginVerify;