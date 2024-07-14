import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Dropdown from './Dropdown';

const CrudForm = ({fieldNameList, fieldTypeList, colSpan, AddUpdate, submitHandler }) => {
    return (
        <div className='bg-[#AAAADA]'>
            <div>
                <h1 className='w-full text-red-400 font-bold py-4 shadow-lg bg-slate-50 text-center mt-4'>{AddUpdate}</h1>
            </div>
            <form onSubmit={submitHandler} className='grid   px-10 mt-5 md:grid-cols-2 gap-4'>
                {
                    fieldNameList.map((field, index)=>{
                        if (index==0){
                            return  <div key={index} className='col-span-2 bg-slate-100 flex  px-6 rounded-lg border-2 py-8 '>
                                <h1 className='font-bold text-red-700 text-center py-2 min-w-40 border-2 shadow-2xl'>{fieldNameList[index].charAt(0).toUpperCase()+fieldNameList[index].slice(1)}</h1>

                                <Input type={fieldTypeList[index]} name={fieldNameList[index]}></Input>
                        </div>
                        }
                        else if(index==1){
                           return  <div key={index} className='col-span-2 bg-slate-100 py-4   px-2 rounded-lg  '>
                                <h1 className='font-bold text-red-700 text-center  min-w-40  shadow-2xl'>{fieldNameList[index].charAt(0).toUpperCase()+fieldNameList[index].slice(1)}</h1>
                                    
                                    <TextArea name={fieldNameList[index]} rowSpan={3}></TextArea>
                                </div>
                        }
                        else if(index==4){
                            return <div key={1001} className='py-5 bg-slate-100 border-green-700'>
                                <h1 className='font-bold text-red-700 text-center min-w-40'>{fieldNameList[index].charAt(0).toUpperCase()+fieldNameList[index].slice(1)}</h1>
                                <Dropdown values={['easy', 'medium','hard']}></Dropdown>
                            </div> 
                                
                        }
                        else{
                                return <div key={index} className={'bg-slate-100 border-green-700 py-2 col-span-1 shadow-lg rounded-md ml-4 flex gap-5 px-6 items-center '}>
                                <h1 className='font-bold min-w-40 text-red-600'>{fieldNameList[index].charAt(0).toUpperCase()+fieldNameList[index].slice(1)}</h1>
                                <Input type={fieldTypeList[index]} name={fieldNameList[index]} ></Input>

                    </div>
                        }
                    })
                }
                <div className='flex justify-center col-span-2 py-2'>
                    <button type='submit'  className='btn btn-outline  shadow-xl text-white border-2  bg-red-400 px-20 '>{AddUpdate=='Add'?'Add now':'Update Now'}</button>
                </div>
            </form>
        </div>
    );
};

export default CrudForm;