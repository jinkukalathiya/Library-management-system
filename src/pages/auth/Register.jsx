import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('First name is required'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            terms: Yup.boolean()
                .oneOf([true], 'You must accept the terms and conditions'),
        }),
        onSubmit: values => {
            alert('Registration Successful:\n' + JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='dark:bg-gray-900 h-screen flex items-center'>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className='border border-gray-600 w-full min-xl:w-5/12 rounded-xl p-8'>
                    <h1 className="text-3xl font-bold text-white text-center mb-8">
                        Create an account
                    </h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                className="w-full p-2.5 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="terms"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.terms}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-sm text-gray-900 dark:text-white">
                                I accept the{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                        {formik.touched.terms && formik.errors.terms && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.terms}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg"
                        >
                            Create Account
                        </button>

                        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-400 hover:underline">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
