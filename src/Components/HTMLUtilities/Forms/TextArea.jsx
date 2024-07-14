import React from 'react';

const TextArea = ({name, rowSpan}) => {
    return (
        <div className={" grid col-span-2 px-10"} >
            <textarea className='shadow-lg  border-2 border-emerald-700 rounded-lg w-full' rows={rowSpan} name={name} id=""></textarea>
        </div>
    );
};

export default TextArea;