import { useContext, useState } from 'react';
import Slider from '../HTMLUtilities/Slider/Slider';
import { DataContext } from '../Contexts/DataProvider';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';
import AssignmentCard from '../Assignments/AssignmentCard';
import Title from '../HTMLUtilities/Title/Title';

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
            <div>
                <Title title={'Latest Assignments'} ></Title>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mt-4'>

                {
                    isLoading?<h1>Loading...</h1>:assignmentData.slice(0,6).map((assignment, index)=><AssignmentCard key={index} assignment={assignment}></AssignmentCard>)
                    
                }
            </div>
        </div>
    )
};

export default Home;