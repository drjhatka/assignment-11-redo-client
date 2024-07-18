import React, { useContext } from 'react';
import AssignmentCard from './AssignmentCard';
import { DataContext } from '../Contexts/DataProvider';
import PendingCard from './PendingCard';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';
import { AuthContext } from '../Contexts/AuthProvider';

const PendingAssignments = () => {
    const {user} = useContext(AuthContext)
    const {assignmentData:assignments, submissionData:submissions, isLoading} = useContext(DataContext)
    ChangeTitle('Pending Assignments')
    
    //console.log(assignments)
     return (
         <div className='lg:w-[90%] md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-4'>
             {
                 !isLoading &&  submissions?.filter(submission=>submission.status=='Pending' && submission.userEmail==user?.email).map((assignment, index)=>{
                     return <PendingCard key={index} assignment={assignment}></PendingCard>
                 })
             }
         </div>
     );
 };


export default PendingAssignments;