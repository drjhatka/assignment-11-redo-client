import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataProvider';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const ViewAssignment = () => {
    const { assignmentData, isLoading } = useContext(DataContext)
    const {user} = useContext(AuthContext)
    const id = useParams().id
    console.log('view ',assignmentData)
    //console.log('as',assignment)
    //const {imageUrl}= !isLoading && assignmentData
    //console.log('img ',imageUrl)
    return (
        <div>
            {
                isLoading ? <h1>Loading....</h1> :
                    assignmentData.filter(assignment => assignment._id == id).map((assignment, index) => {

                        //console.log('---< ',assignmentData)
                        return <div className='py-4 px-5  grid grid-cols-1 md:grid-cols-2' key={index}>
                            <div className='flex justify-center items-center'>
                            <img src={assignment?.imageUrl} alt="Assignment Image" />

                            </div>
                                
                            <div className='flex flex-col gap-5'>
                                <h1 className='font-semibold shadow-lg text-xl text-center text-blue-600 py-4 border-b-2'>{assignment?.title}</h1>
                                <div>
                                    <h1 className='text-lg font-semibold text-red-700'>Assignment Description</h1>
                                <p className='font-semibold py-3 px-4 text-justify shadow-lg border-2 rounded-md'>{assignment.description}</p>
                                </div>
                                <div className='flex border-b-2 py-3 justify-between'>
                                    <span className=' px-20 py-4 bg-slate-100 text-red-700 border-2 shadow-lg font-semibold'>Difficulty : {assignment.difficulty.toUpperCase()}</span>
                                    <span className=' px-20 py-4 bg-slate-100 text-red-700 border-2 shadow-lg font-semibold'>Marks : {assignment.marks.toUpperCase()}</span>
                                </div>
                                {
                                    user && <div className='flex border-2 shadow-xl py-2 px-2 justify-center'>
                                        <Link to={'/submit-assignment/'+assignment?._id} className='btn btn-success text-white w-40 '>Take Assignment</Link>

                                        <div className='flex justify-center gap-10'>
                                </div>
                                    </div>
                                }
                                
                            </div>
                        </div>

                    })
            }
        </div>
    );
};

export default ViewAssignment;