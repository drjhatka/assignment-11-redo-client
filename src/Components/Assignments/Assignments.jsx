import React, { useContext, useState } from 'react';
import { DataContext } from '../Contexts/DataProvider';
import AssignmentCard from './AssignmentCard';
import Title from '../HTMLUtilities/Title/Title';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ChangeTitle } from '../HTMLUtilities/Title/DocTitle';

const Assignments = () => {
    ChangeTitle('All Assignments')

    const queryClient = useQueryClient()
    //const {data, isLoading} = useContext(DataContext)
    const [loadedData, setLoadedData] = useState()

    const {data, isLoading} = useQuery({
        queryKey:['fiters', setLoadedData],
        queryFn:async()=>{
            const result =await axios.get('/assignments',{withCredentials:true})
            setLoadedData(result.data)
            return result.data
        }
    })

    const {mutate} =useMutation({
        mutationKey:['filter-assignments', setLoadedData],
        mutationFn:async(difficulty)=>{
            const result = await axios.post('/filtered-assignments',{difficulty:difficulty},{withCredentials:true})
            setLoadedData(result.data)
           // console.log(result.data)
            //return result.data
        }
    })
    //mutate()

   
    const handleFilter =()=>{   
        //console.log(event.target.value)
        const difficulty = event.target.value
        if(difficulty=='all'){
            setLoadedData(data)
        }  
        else{
            mutate({difficulty:event.target.value})
            setLoadedData(data)

        }   
        //queryClient.invalidateQueries(['filter-assignments'])

    }

    //console.log(isSuccess)
    return (
        <div>

            <Title title={'View All Assignments'} />
            <div className='py-3 border-2 flex flex-col items-center gap-2 justify-center bg-slate-100 mt-2'>
                <h2 className='font-bold text-green-900'>Filter By Difficulty Level</h2>
                <select onChange={handleFilter} className='w-40 font-bold text-center py-2 border-2 rounded-md' name="filter" id="">
                    <option value="all">All</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
            </div>
            <div className='lg:w-[90%] md:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-4'>
                {
                    isLoading ? <h1>Loading...</h1>:  loadedData?.map((assignment, index) => {
                        return <AssignmentCard key={index} assignment={assignment}></AssignmentCard>
                    })
                }
            </div>
        </div>
    );
};

export default Assignments;