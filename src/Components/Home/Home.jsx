import { useContext, useState } from 'react';
import Slider from '../HTMLUtilities/Slider/Slider';
import { DataContext } from '../Contexts/DataProvider';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';
import AssignmentCard from '../Assignments/AssignmentCard';
import Title from '../HTMLUtilities/Title/Title';
import DisplayCard from './DisplayCard';
import { Link } from 'react-router-dom';

const Home = () => {
    ChangeTitle('Maestro||Home')
    const { assignmentData, isLoading } = useContext(DataContext)
    //const [loadedData, setLoadedData]= useState()
    //!isLoading && setLoadedData(data)
    console.log('data', assignmentData)
    const submitHandler = () => {
        event?.preventDefault()
        const form = event.target
        // console.log(form.title.value)
    }
    console.log(isLoading)
    return (
        <div className='w-[80%] mx-auto'>
            {
                isLoading ? <h1>Loading...</h1> : <Slider slides={assignmentData.slice(0, 4)} />
            }
            <div>
                <div >
                    <h1 className='w-full border-2 shadow-lg mt-2 rounded-md text-xl font-bold  py-4 flex justify-center text-white bg-black'>{'Popular Assignments'}</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mt-4'>

                {
                    isLoading ? <h1>Loading...</h1> : assignmentData.slice(0, 6).map((assignment, index) => <DisplayCard key={index} assignment={assignment}></DisplayCard>)

                }
            </div>
            <div className='py-4 flex justify-center text-center'>
                <Link to='/assignments' className='btn btn-info text-white '>View All Assignments</Link>
            </div>
        </div>
    )
};

export default Home;