import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { createContext, useState } from 'react';

export const DataContext = createContext(null)

const DataProvider = ({children}) => {

    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
    
    const [assignmentData, setAssignmentData] = useState(null) 
    const { data, isLoading } = useQuery({
        queryKey: ['assignments', setAssignmentData],
        queryFn: async () => {
            const result = await axios.get('/assignments')
            setAssignmentData(result.data)
            console.log('Assignments ', result.data)
            return result.data;
        },
        onSuccess:()=>{

        }

    })
    const dataInfo = {
        assignmentData,
        isLoading,
        setAssignmentData
    }
    
    //console.log('Provider Data ',assignmentData)
    return <DataContext.Provider value={ dataInfo }>
        {children}
    </DataContext.Provider>
};

export default DataProvider;