import React from 'react';
import AddForm from '../HTMLUtilities/Forms/CrudForm';

const Home = () => {
    const submitHandler =()=>{
        event?.preventDefault()
        const form = event.target
        console.log(form.title.value)
    }
    return (
        <div>
            <AddForm fieldNameList={['title','description', 'marks','imageUrl','difficulty','dueDate']} 
            fieldTypeList={['text','text','text','text','text','date']  } colSpan={2} AddUpdate={'Add'} submitHandler={submitHandler}></AddForm>
        </div>
    )
};

export default Home;