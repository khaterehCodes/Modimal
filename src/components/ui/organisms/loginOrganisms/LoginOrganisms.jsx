import Image from "../../atom/customImage/Image";
import LoginForm from "../../molecules/loginForm/LoginForm";

function LoginOrganisms() {
    return (
        <div className="w-full md:h-[900px] h-auto flex items-center justify-center">
            <div className="md:w-[1350px]  w-full h-auto md:h-[840px] flex md:flex-row flex-col items-center md:justify-between">
                <Image src={'/assets/images/registerPicture.jpg'} className='md:w-[600px] md:h-[840px] md:flex hidden' />
                <Image src={'/assets/images/registerPictureRes.jpg'} className='w-full h-[220px] md:hidden' />
                <div className='md:w-[700px] w-full h-[350px] md:h-[700px] flex items-center justify-center'>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginOrganisms;