import Image from "../../atom/customImage/Image";
import SignupForm from "../../molecules/signupForm/SignupForm";

function SignupOrganisms() {
    return (
        <div className="w-full h-auto md:h-[900px] flex items-center justify-center">
            <div className="md:w-[1350px] w-full h-auto md:h-[840px] flex md:flex-row flex-col items-center justify-between">
                <Image src={'/assets/images/registerPicture.jpg'} className='md:w-[600px] md:h-[840px] md:flex hidden' />
                <Image src={'/assets/images/registerPictureRes.jpg'} className='w-full h-[220px] md:hidden' />
                <div className='md:w-[700px] w-full h-[550px] md:h-[700px] flex items-center justify-center'>
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}

export default SignupOrganisms;