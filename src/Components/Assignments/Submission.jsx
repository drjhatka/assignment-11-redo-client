import React, { useContext, useState } from 'react';
import SubmissionForm from '../Submission/SubmissionForm';
import { DataContext } from '../Contexts/DataProvider';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { Alert } from '../HTMLUtilities/Alerts/Alert';
import axios from 'axios';
import { QueryClient, useMutation } from '@tanstack/react-query';

const Submission = () => {

 
    const id = useParams().id
    const queryClient = new QueryClient()
    const { assignmentData, submissionData, isLoading } = useContext(DataContext)
    const {user} = useContext(AuthContext)
    const assignment = !isLoading && assignmentData.filter(assignment => assignment._id == id)[0]
    console.log('s ',submissionData)

    const {mutate} = useMutation({
        mutationKey:['create-submission'],
        mutationFn:(submission)=>{
            axios.post('/create-submission',submission).then(data=>{
                Alert('Success','Submission Completed', 'success')
                return data.data
            })
        }
    })
    const submitHandler = () => { 
        event.preventDefault()
        const {_id,title, description, marks,dueDate,imageUrl,difficulty} = assignment
      
        const submission ={title,description,marks,dueDate,imageUrl,difficulty, assignmentId:_id, status:'Completed',marksGiven:0, pdfLink:event.target.pdfLink.value, note:event.target.note.value, userEmail:user.email, userName:user.displayName}
        //check if submission exists for this user
        //console.log(submissionData.filter(sub=>sub.assignmentId==assignment._id))
        if(submissionData.filter(sub=>sub.assignmentId==assignment._id).length>0){
            Alert('Error','You already submitted this assignment')
        }
        else{
          mutate(submission)
         queryClient.invalidateQueries(['submissions'])
        }
        
    }
    return !isLoading &&
        <SubmissionForm
            fieldNameList={['title', 'description', 'marks', 'imageUrl', 'difficulty', 'dueDate', 'pdfLink', 'note']}
            fieldTypeList={['text', 'text', 'text', 'text', 'text', 'date', 'text', 'text']}
            defaultValues={[assignment.title, assignment.description, assignment.marks, assignment.imageUrl, assignment.difficulty, assignment.dueDate]}
            submitHandler={submitHandler}>
        </SubmissionForm>



};

export default Submission;