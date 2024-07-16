import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assignment}) => {
    const {_id,title, description,status, marks,imageUrl,difficulty, userName, userEmail, userPhotoUrl}= assignment
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-2">
                <figure className='h-44'>
                    <img
                    className='cover '
                        src={imageUrl}
                        alt="Image" />
                </figure>
                <div className="flex flex-grow card-body">
                    <h2 className="card-title text-2xl shadow-md py-2 px-4 bg-slate-100 text-red-700">
                        {title}
                    </h2>
                    <p>{description.slice(0,50)}</p>
                    <div className="card-actions flex flex-grow justify-between border-t-2 py-2">
                        <div className="badge badge-secondary py-4 text-white font-semibold">Difficulty: {difficulty.toUpperCase()}</div>
                        <div className="badge badge-accent py-4 text-white font-semibold">Marks: {marks}</div>
                        <div className="badge badge-accent py-4 text-white font-semibold">Status: {status}</div>
                    </div>
                    
                    <div className='text-center mt-2 border-t-2 py-2'>
                        <Link to={'/assignment/'+_id}  className='btn btn-secondary'>View Assignment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;