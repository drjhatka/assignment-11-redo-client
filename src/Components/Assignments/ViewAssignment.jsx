import React, { useContext } from 'react';
import { DataContext } from '../Contexts/DataProvider';
import { useParams } from 'react-router-dom';

const ViewAssignment = () => {
    const { assignmentData, isLoading } = useContext(DataContext)
    const id = useParams().id
    console.log('view ',assignmentData)
    //console.log('as',assignment)
    //const {imageUrl}= !isLoading && assignmentData
    //console.log('img ',imageUrl)
    return (
        <div>
            {
                isLoading ? <h1>Loading....</h1> :
                    assignmentData.filter(assignment => assignment._id == id).map((assignment, index) => {

                        console.log('---< ',assignmentData)
                        return <div key={index}>
                            <img src={"/"+assignment?.imageUrl} alt="Assignment Image" />
                            <h1>{assignment?.title}</h1>
                        </div>

                    })
            }
        </div>
    );
};

export default ViewAssignment;