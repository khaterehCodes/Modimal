import Button from "../../atom/customButton/Button";
import P from "../../atom/customP/P";
import Icon from "../../atom/icons/Icon";

function SignupVerify({ showVerify, setShowVerify, email }) {
    return (
        <>
            {showVerify && (
                <div className="flex fixed inset-0 z-50 backdrop-blur-md bg-[#0000007A] items-center justify-center">
                    <div className="md:w-[860px] md:h-[450px] bg-white md:p-5 flex flex-col justify-around items-center">
                        <div className="w-full md:h-[50px] flex items-center justify-start">
                            <Button onClick={() => setShowVerify(false)}>
                                <Icon name={'closeIcon'} />
                            </Button>
                        </div>
                        <div className="w-full md:h-[60px] flex items-center justify-center md:text-[32px] font-semibold">
                            <P>verify your email address</P>
                        </div>
                        <P className="md:w-[500px] md:h-[70px] md:text-[18px] text-center">
                            We’ve Sent An Email To
                            <span className='text-[#748C70] w-auto cursor-pointer inline-block h-[30px] mr-[5px] ml-[5px]'>
                                {email}
                            </span>
                            To Verify Your Email Address And Activate Your Account. The Link In The Email Will Expire In 24 Hours.
                        </P>
                        <P className="md:w-[550px] md:h-[70px] md:text-[18px] text-center">
                            <span className='text-[#748C70] w-[100px] cursor-pointer inline-block h-[30px]'>Click Here</span> If You Did Not Receive An Email Or Would Like To Change The Email Address You Registered With
                        </P>
                    </div>
                </div>
            )}
        </>
    );
}
export default SignupVerify;