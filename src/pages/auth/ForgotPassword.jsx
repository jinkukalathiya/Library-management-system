import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import * as Yup from 'yup';

const ForgotPasswordPage = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
        }),
        onSubmit: values => {
            alert('Email Sent :\n' + JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='dark:bg-gray-900 h-screen flex items-center'>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className='border border-gray-600 w-full min-xl:w-5/12 rounded-xl p-8'>
                    <h1 className='text-3xl font-bold text-white text-center mb-8'>Forgot Password?</h1>

                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                                placeholder="name@example.com"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            ) : null}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg"
                        >
                            Reset Password
                        </button>

                        <div className="text-center mt-4">
                            <Link to="/login" className="text-blue-400 hover:underline">
                                Back To Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;