import Image from "../../atom/customImage/Image";
import SignupForm from "../../molecules/signupForm/SignupForm";

function SignupOrganisms() {
    return (
        <div className="md:w-full md:h-[900px] flex items-center justify-center">
            <div className="md:w-[1350px] md:h-[840px] bg-pink-600 flex items-center justify-between">
                <Image src={'/assets/images/registerPicture.jpg'} className='md:w-[600px] md:h-[840px]' />
                <SignupForm />
            </div>
        </div>
    );
}

export default SignupOrganisms;