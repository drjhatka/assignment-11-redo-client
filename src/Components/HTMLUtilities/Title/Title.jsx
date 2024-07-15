import React from 'react';

const Title = ({title}) => {
    return (
        <div >
            <h1 className='w-full border-2 shadow-lg mt-2 text-xl font-bold  py-4 flex justify-center text-red-600 bg-slate-200'>{title}</h1>
        </div>
    );
};

export default Title;