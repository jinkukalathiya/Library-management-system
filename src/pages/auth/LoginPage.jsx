import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        // <form onSubmit={formik.handleSubmit}>
        //     <label htmlFor="firstName">First Name</label>
        //     <input
        //         id="firstName"
        //         name="firstName"
        //         type="text"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.firstName}
        //     />
        //     {formik.touched.firstName && formik.errors.firstName ? (
        //         <div>{formik.errors.firstName}</div>
        //     ) : null}

        //     <label htmlFor="lastName">Last Name</label>
        //     <input
        //         id="lastName"
        //         name="lastName"
        //         type="text"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.lastName}
        //     />
        //     {formik.touched.lastName && formik.errors.lastName ? (
        //         <div>{formik.errors.lastName}</div>
        //     ) : null}

        //     <label htmlFor="email">Email Address</label>
        //     <input
        //         id="email"
        //         name="email"
        //         type="email"
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.email}
        //     />
        //     {formik.touched.email && formik.errors.email ? (
        //         <div>{formik.errors.email}</div>
        //     ) : null}

        //     <button type="submit">Submit</button>
        // </form>

        <div className='dark:bg-gray-900 h-screen'>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className='py-14'>
                    <h1 className='text-3xl font-bold text-white text-center'>Login <br /> Library Management System</h1>
                </div>
                <form className="flex flex-col w-full justify-center items-center min-xl:w-4/12">
                    <div className="mb-5 w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                    <div className="mb-5 w-full">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;