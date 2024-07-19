import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { createContext, useState } from 'react';

export const DataContext = createContext(null)

const DataProvider = ({children}) => {

    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
    
    const [assignmentData, setAssignmentData] = useState(null) 
    const [submissionData, setSubmissionData] = useState(null) 
    const { data, isLoading } = useQuery({
        queryKey: ['assignments', setAssignmentData],
        queryFn: async () => {
            const result = await axios.get('/assignments',{withCredentials:true})
            setAssignmentData(result.data)
            //console.log('Assignments ', result.data)
            return result.data;
        },
        onSuccess:()=>{

        }

    })
    const { data:submissions, isLoading:submissionLoading } = useQuery({
        queryKey: ['submissions', setSubmissionData],
        queryFn: async () => {
            const result = await axios.get('/submissions',{withCredentials:true})
            setSubmissionData(result.data)
            return result.data;
        },
        onSuccess:()=>{

        }

    })
    
    const dataInfo = {
        assignmentData,
        submissionData,
        isLoading,
        setAssignmentData
    }
    
    return <DataContext.Provider value={ dataInfo }>
        {children}
    </DataContext.Provider>
};

export default DataProvider;