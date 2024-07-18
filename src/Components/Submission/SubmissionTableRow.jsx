import React from 'react';

const SubmissionTableRow = ({submission}) => {
    const {title, status,marks, marksGiven,note, userName} = submission
    return (
        <tr className='font-semibold text-md text-center text-red-800 border-2 border-b-4   '>
            <td className='border-2 bg-slate-50'>{title}</td>
            <td className='border-2 bg-slate-50'>{status}</td>
            <td className='border-2 bg-slate-50'>{marks}</td>
            <td className='border-2 bg-slate-50'>{marksGiven}</td>
            <td className='border-2 bg-slate-50'>{userName}</td>
            <td className='border-2 bg-slate-50'>{note}</td>
        </tr>
    );
};

export default SubmissionTableRow;