import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            <img className='w-96 border-2 rounded-lg shadow-2xl' src="images/error.jpg" alt="" />
            <div className='mt-4'>
                <Link to={'/'} className='btn btn-primary'><IoHomeOutline className='text-xl text-white'></IoHomeOutline> Back to HomePage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;