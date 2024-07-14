import React from 'react';
import CrudForm from '../HTMLUtilities/Forms/CrudForm';

const AddAssignment = () => {
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
    }
    return (
        <div>
        <CrudForm fieldNameList={['title','description', 'marks','imageUrl','difficulty','dueDate']} 
            fieldTypeList={['text','text','text','text','text','date']  } colSpan={2} AddUpdate={'Add'} submitHandler={submitHandler}></CrudForm>
        </div>
    );
};

export default AddAssignment;