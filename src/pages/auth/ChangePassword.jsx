import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChangePasswordPage = () => {
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string()
                .required('Current password is required'),
            newPassword: Yup.string()
                .min(8, 'New password must be at least 8 characters')
                .required('New password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: values => {
            alert('Password changed:\n' + JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className='dark:bg-gray-900 h-screen flex items-center'>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className='border border-gray-600 w-full min-xl:w-5/12 rounded-xl p-8'>
                    <h1 className="text-3xl font-bold text-white text-center mb-8">Change Password ?</h1>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col w-full justify-center items-center"
                    >
                        {/* Current Password */}
                        <div className="mb-5 w-full">
                            <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Current Password
                            </label>
                            <input
                                id="currentPassword"
                                name="currentPassword"
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.currentPassword}
                            />
                            {formik.touched.currentPassword && formik.errors.currentPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.currentPassword}</p>
                            )}
                        </div>

                        {/* New Password */}
                        <div className="mb-5 w-full">
                            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newPassword}
                            />
                            {formik.touched.newPassword && formik.errors.newPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.newPassword}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-5 w-full">
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg"
                        >
                            Change Password
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
export default ChangePasswordPage;