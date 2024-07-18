import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCard = ({assignment}) => {
    const {_id,title, description,status, marks,imageUrl,difficulty, userName, userEmail, userPhotoUrl}= assignment

    return (
        <div>
        <div className="card bg-base-100 shadow-xl border-2">
            <figure className='h-40'>
                <img
                className='cover '
                    src={imageUrl}
                    alt="Image" />
            </figure>
            <div className="flex flex-grow card-body">
                <h2 className="card-title text-2xl shadow-md py-2 px-4 bg-slate-100 text-red-700">
                    {title}
                </h2>
                <p className='text-justify'>{description?.slice(0,40)}......</p>
                <div className="card-actions flex flex-grow justify-center border-t-2 py-1 ">
                    <div className="bg-slate-100 text-red-700 border-2 shadow-lg  px-4 font-semibold">Marks: {marks}</div>

                </div>
                
                <div className='flex justify-center border-t py-1 gap-3'>
                    <Link to={'/assignment/'+_id}  className='btn   btn-success text-white w-44'>View</Link>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default DisplayCard;