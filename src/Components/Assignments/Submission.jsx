import React, { useContext } from 'react';
import SubmissionForm from '../Submission/SubmissionForm';
import { DataContext } from '../Contexts/DataProvider';
import { useParams } from 'react-router-dom';

const Submission = () => {
    const submitHandler = () => { }
    const id = useParams().id
    const { assignmentData, isLoading } = useContext(DataContext)
    const assignment = !isLoading && assignmentData.filter(assignment => assignment._id == id)[0]
    console.log('ass ',assignment)
    return !isLoading &&
        <SubmissionForm
            fieldNameList={['title', 'description', 'marks', 'imageUrl', 'difficulty', 'dueDate', 'pdfLink', 'note']}
            fieldTypeList={['text', 'text', 'text', 'text', 'text', 'date', 'text', 'text']}
            defaultValues={[assignment.title, assignment.description, assignment.marks, assignment.imageUrl, assignment.difficulty, assignment.dueDate]}
            submitHandler={submitHandler}>
        </SubmissionForm>



};

export default Submission;