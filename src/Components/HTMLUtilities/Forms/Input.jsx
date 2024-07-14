import React from 'react';

const Input = ({type, name}) => {
    console.log('Name ==> ',type)
    return (
            <input name={name} type={type} className=' px-3 py-3 rounded-md shadow-lg  input-info border-2 flex-grow' />
        
    );
};

export default Input;