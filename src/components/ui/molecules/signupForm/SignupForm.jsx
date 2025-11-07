import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import P from '../../atom/customP/P';
import Input from '../../atom/customInput/Input';
import Button from '../../atom/customButton/Button';
import { Link } from 'react-router-dom';
import { registerIcons } from '../../../../core/constants/registerIcons/RegisterIcons';
import React, { useState } from 'react';
import Icon from '../../atom/icons/Icon';
import SignupVerify from '../signupVerify/SignupVerify';
const signupSchima = Yup.object({
    name: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
})
function SignupForm() {
    const [email, setEmail] = useState('')
    const [showVerify, setShowVerify] = useState(false)
    return (
        <div className='md:w-[500px] w-full h-[550px] md:h-[630px] flex flex-col items-center justify-around'>
            <P className='md:font-semibold font-bold text-[18px] md:text-[32px]'>Create Account</P>
            <Formik
                initialValues={{ name: '', lastName: '', email: '', password: '' }}
                validationSchema={signupSchima}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setEmail(values.email)
                    setShowVerify(true)
                    setSubmitting(false)
                    resetForm()
                }} >
                <Form className='md:w-[400px] w-[330px] h-[250px] md:h-[250px] flex flex-col justify-between'>
                    <Field as={Input} name='name' placeHolder='First Name' className='w-full md:h-[40px] border border-[#606060] outline-none p-2' />
                    <Field as={Input} name='lastName' placeHolder='Last Name' className='w-full md:h-[40px] border border-[#606060] outline-none p-2' />
                    <Field as={Input} name='email' type='email' placeHolder='Email' className='w-full md:h-[40px] border border-[#606060] outline-none p-2' />
                    <Field as={Input} name='password' placeHolder='Password' className='w-full md:h-[40px] border border-[#606060] outline-none p-2' />
                    <Button type='submit' className='w-full h-[40px] bg-[#5A6D57] text-white'>
                        Register Now
                    </Button>
                </Form>
            </Formik>
            <div className='md:w-[400px] w-full h-[200px] md:h-[280px] flex flex-col items-center justify-around'>
                <div className='w-[300px] md:h-[40px] h-[20px] flex items-center md:gap-4 gap-2 justify-center'>
                    <P className='text-[14px]'>Already have an account?</P>
                    <Link to='/login'>
                        <P className='text-[#748C70] text-[14px]'>Log in</P>
                    </Link>
                </div>
                <P className='text-[12px]'>Or</P>
                <div className='w-[140px] md:h-[40px] h-[30px] flex items-center justify-around'>
                    {registerIcons.map((icon, index) => (
                        <React.Fragment key={index}>
                            <Icon name={icon} />
                        </React.Fragment>
                    ))}
                </div>
                <div className='md:w-full w-[300px] md:h-[50px] flex justify-center flex-wrap items-center md:text-[12px] gap-1 text-[10px] text-center'>
                    By Clicking Register Now’’you Agree To <P className='text-[#748C70] border-b border-[#748C70]'>Terms& Conditions</P> And <P className='text-[#748C70] border-b border-[#748C70]'>Privacy Policy</P>
                </div>
            </div>
            <SignupVerify showVerify={showVerify} setShowVerify={setShowVerify} email={email} />
        </div>
    );
}

export default SignupForm;