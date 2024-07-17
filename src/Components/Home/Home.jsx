import { useContext, useState } from 'react';
import Slider from '../HTMLUtilities/Slider/Slider';
import { DataContext } from '../Contexts/DataProvider';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';

const Home = () => {
    ChangeTitle('Maestro||Home')
    const {assignmentData, isLoading} = useContext(DataContext)
    //const [loadedData, setLoadedData]= useState()
    //!isLoading && setLoadedData(data)
    console.log('data', assignmentData)
    const submitHandler =()=>{
        event?.preventDefault()
        const form = event.target
       // console.log(form.title.value)
    }
    console.log(isLoading)
    return (
        <div className='w-[80%] mx-auto'>
            {
                isLoading?<h1>Loading...</h1>:<Slider slides={assignmentData.slice(0,4)} />
            }
        </div>
    )
};

export default Home;