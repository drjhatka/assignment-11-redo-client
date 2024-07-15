import React from 'react';

const Input = ({type, name, defaultValue}) => {
    console.log('Name ==> ',type)
    return (
            <input name={name} defaultValue={defaultValue?defaultValue:''} required type={type} className=' px-3 py-3 rounded-md shadow-lg  input-info border-2 flex-grow' />
        
    );
};

export default Input;