import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import P from '../../atom/customP/P';
import Input from '../../atom/customInput/Input';
import Button from '../../atom/customButton/Button';
import { Link } from 'react-router-dom';
import { registerIcons } from '../../../../core/constants/registerIcons/RegisterIcons';
import React, { useState } from 'react';
import Icon from '../../atom/icons/Icon';
import LoginVerify from '../loginVerify/LoginVerify';
const loginSchima = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required()
})
function LoginForm() {
    const [showVerify, setShowVerify] = useState(false)
    return (
        <div className='md:w-[500px] w-full h-[330px] md:h-[630px] flex flex-col items-center justify-around'>
            <P className='md:font-semibold font-bold text-[18px] md:text-[32px]'>Log in</P>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchima}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setShowVerify(true)
                    setSubmitting(false)
                    resetForm()
                }} >
                <Form className='md:w-[400px] w-full h-[140px] md:h-[170px] flex flex-col justify-between'>
                    <Field as={Input} name='email' type='email' placeHolder='Email' className='w-full md:h-[40px] border border-[#606060] outline-none p-2' />
                    <Field as={Input} name='password' placeHolder='Password' className='w-full md:h-[40px] border border-[#606060] outline-none p-2' />
                    <P className='text-[#748C70] md:flex hidden'>Forgot Your Password?</P>
                    <Button type='submit' className='w-full h-[40px] bg-[#5A6D57] text-white'>
                        log in
                    </Button>
                </Form>
            </Formik>
            <div className='md:w-[400px] w-full h-[100px] md:h-[220px] flex flex-col items-center justify-around'>
                <P className='text-[12px]'>Or</P>
                <div className='w-[140px] h-[40px] flex items-center justify-around'>
                    {registerIcons.map((icon, index) => (
                        <React.Fragment key={index}>
                            <Icon name={icon} />
                        </React.Fragment>
                    ))}
                </div>
                <div className='md:w-[300px] md:h-[40px] flex items-center gap-2 justify-center'>
                    <P className='text-[14px]'>New To Modimal?</P>
                    <Link to='/signup'>
                        <P className='text-[#748C70] md:text-[14px]'>Create An Account</P>
                    </Link>
                </div>
            </div>
            <LoginVerify showVerify={showVerify} setShowVerify={setShowVerify} />
        </div>
    );
}

export default LoginForm;