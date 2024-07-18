import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';
import { Alert } from '../HTMLUtilities/Alerts/Alert';
import SubmissionForm from '../Submission/SubmissionForm';
import { DataContext } from '../Contexts/DataProvider';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
    const { user } = useContext(AuthContext)
    const queryClient = useQueryClient()
    const { assignmentData, isLoading } = useContext(DataContext)
    const id = useParams().id
    const assignment = !isLoading && assignmentData?.filter(assignment => assignment._id == id)[0]
    const { mutate } = useMutation({
        mutationKey: ['update-assignment'],
        mutationFn: async (variables) => {
            console.log('ID==> ',variables.id)
            const result = await axios.patch('/update-assignment/' + variables.id, variables.assignment)
            console.log()
            return result.data
        },
        onSuccess:()=>{
            Alert('Success','Assignment Updated Successfully','success')

        },
        onError:(error)=>{
            Alert('Error',error.message,'error')
        }
    })
    const updateHandler = () => {
        event.preventDefault()
        const form = event.target


        const fields = [
            form.title.value,
            form.description.value,
            form.marks.value,
            form.imageUrl.value,
            form.difficulty.value,
            form.dueDate.value,
            form.status.value,
        ]
        const assignment = {
            title: fields[0],
            description: fields[1],
            marks: fields[2],
            imageUrl: fields[3],
            difficulty: fields[4],
            dueDate: fields[5],
            status: fields[6]
        }

            mutate({id:id, assignment:assignment})
            Alert('error', 'You cant update other users assignments! Try adding one', 'error')
        
        //queryClient.invalidateQueries(['assignments'])

    }
    return (
        <div>
            <SubmissionForm fieldNameList={['title', 'description', 'marks', 'imageUrl', 'difficulty', 'dueDate', 'status',]}
                fieldTypeList={['text', 'text', 'text', 'text', 'text', 'date', 'text']}
                defaultValues={[assignment.title, assignment.description, assignment.marks, assignment.imageUrl, assignment.difficulty, assignment.dueDate, assignment.status]}
                AddUpdate={'Update'} submitHandler={updateHandler} update={true}></SubmissionForm>
        </div>
    );
};

export default UpdateAssignment;