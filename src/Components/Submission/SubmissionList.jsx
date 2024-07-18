import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataProvider';
import SubmissionTable from './SubmissionTableRow';
import SubmissionTableRow from './SubmissionTableRow';
import { AuthContext } from '../Contexts/AuthProvider';

const SubmissionList = () => {
    const {submissionData} = useContext(DataContext)
    const {user} = useContext(AuthContext)
    return (
        <div>
            <table className='table mt-4 md:w-[90%] mb-4 md:mx-auto'>
                
                <thead className='text-white bg-emerald-600 text-md border-2 mt-2'>
                    <th className='border-2 text-center'>Title</th>
                    <th className='border-2 text-center'>Status</th>
                    <th className='border-2 text-center'>Total Marks</th>
                    <th className='border-2 text-center'>Marks Obtained</th>
                    <th className='border-2 text-center'>Examinee Name</th>
                    <th className='border-2 text-center'>Feedback</th>
                </thead>
                <tbody>
                    

                            {
                                submissionData?.filter(submission=>submission.userEmail==user.email).map(submission=>{
                                    return <SubmissionTableRow key={Math.random()*1000} submission={submission}></SubmissionTableRow>
                                })
                            }
                
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionList;