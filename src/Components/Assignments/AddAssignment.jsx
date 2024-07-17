import React, { useContext } from 'react';
import CrudForm from '../HTMLUtilities/Forms/CrudForm';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Alert} from '../HTMLUtilities/Alerts/Alert';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';

const AddAssignment = () => {
    ChangeTitle('Add Assignment')

    const {user} = useContext(AuthContext)
    const submitHandler = ()=>{
        event.preventDefault()
    const form = event.target

    const fields = [form.title.value,
                    form.description.value,
                    form.marks.value,
                    form.imageUrl.value,
                    form.difficulty.value,
                    form.dueDate.value,
                ]
    const assignment = {
                    title: fields[0],
                    description: fields[1], 
                    marks: fields[2], 
                    imageUrl: fields[3],
                    difficulty:fields[4],
                    dueDate:fields[5],
                    status:'Pending',
                    marksGiven:0,
                    userName:user.displayName,
                    userEmail:user?.email,
                    userPhotoUrl: user.photoURL ? user.photoURL:'default url'
                }
            axios.post('/create-assignment/', assignment).then(
                Alert('Success','Assignment Created Successfully','success')
            ).
                catch(error=>{
                Alert('Error',error.message,'error')
                
                })
    }
    return (
        <div>
        <CrudForm fieldNameList={['title','description', 'marks','imageUrl','difficulty','dueDate']} 
            fieldTypeList={['text','text','text','text','text','date']  } colSpan={2} AddUpdate={'Add'} submitHandler={submitHandler}></CrudForm>
        </div>
    );
};

export default AddAssignment;