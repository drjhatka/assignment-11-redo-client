import React from 'react';

const Dropdown = ({values}) => {
    console.log()
    return (
        <div className=' py-2 rounded-lg justify-center flex'>
            
            <select name="difficulty" className='border-2 py-5 w-40   h-full text-center font-bold text-red-700 shadow-lg rounded-md' >
                {
                    values.map(value=>{
                        return <option key={Math.random()*1000} value={value}>{value}</option>
                    })
                }
             
            </select>
        </div>
    );
};

export default Dropdown;