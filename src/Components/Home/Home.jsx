import { useContext, useState } from 'react';
import Slider from '../HTMLUtilities/Slider/Slider';
import { DataContext } from '../Contexts/DataProvider';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';
import AssignmentCard from '../Assignments/AssignmentCard';
import Title from '../HTMLUtilities/Title/Title';
import DisplayCard from './DisplayCard';
import { Link } from 'react-router-dom';
import LottieAnimation from '../HTMLUtilities/Animations/LottieAnimation';

const Home = () => {
    ChangeTitle('Maestro||Home')
    const { assignmentData, isLoading } = useContext(DataContext)
    
   
    const submitHandler = () => {
        event?.preventDefault()
        const form = event.target
    }
    return (
        <div className='w-[80%] mx-auto'>
            {
                isLoading ? <LottieAnimation></LottieAnimation> : <Slider slides={assignmentData.slice(0, 4)} />
            }
            <div>
                <div >
                    <h1 className='w-full border-2 shadow-lg rounded-md text-xl font-bold  py-4 flex justify-center text-white bg-fuchsia-500 mt-5'>{'Popular Assignments'}</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 mt-4'>

                {
                    isLoading ? <LottieAnimation/> : assignmentData.slice(0, 6).map((assignment, index) => <DisplayCard key={index} assignment={assignment}></DisplayCard>)

                }
            </div>
            <div className='py-4 flex justify-center text-center'>
                <Link to='/assignments' className='btn btn-info text-white '>View All Assignments</Link>
            </div>
            <div className='flex bg-fuchsia-400 text-white justify-center shadow-2xl mt-4  rounded-md mb-5 border-2'>
                <h1 className='py-4 font-bold text-2xl '>FAQ Section</h1>
            </div>
            <div className='grid grid-cols-1 border-2 mb-4 gap-4 md:grid-cols-2'>
                <img src="images/faq.jpg" className=''  alt="" />
                <div className='px-10 py-5 flex flex-col border-2 border-gray-400 rounded-lg shadow-2xl '>
                    <h1 className='text-xl font font-semibold text-center pb-3 border-b-2 bg-slate-100 py-3 text-blue-700'>Still Got Questions? <small><br />we are here to answer</small></h1>
                    <p className='text-justify py-4 font-semibold'>In this section you will find answers to your common questions. Dont Forget to add your own questions so we know better your needs and preferences.</p>
                    <div className='flex justify-center border-t-2 '>
                        <button className='btn text-white w-56 mt-5  btn-success'> View All FAQs</button>

                    </div>
                </div> 
            </div>
        </div>
    )
};

export default Home;