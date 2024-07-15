import React, { useContext } from 'react';
import AssignmentCard from './AssignmentCard';
import { DataContext } from '../Contexts/DataProvider';

const PendingAssignments = () => {
    const {assignmentData:assignments, isLoading} = useContext(DataContext)
    
    //console.log(assignments)
     return (
         <div className='lg:w-[90%] md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-4'>
             {
                 !isLoading &&  assignments.filter(assignment=>assignment.status=='Pending').map((assignment, index)=>{
                     return <AssignmentCard key={index} assignment={assignment}></AssignmentCard>
                 })
             }
         </div>
     );
 };


export default PendingAssignments;