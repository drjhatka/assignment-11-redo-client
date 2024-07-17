import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { AuthContext } from '../Contexts/AuthProvider';
import Swal from 'sweetalert2';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const AssignmentCard = ({assignment}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const queryClient = useQueryClient()
    const {_id,title, description,status, marks,imageUrl,difficulty, userName, userEmail, userPhotoUrl}= assignment
    const {mutate} = useMutation({
        mutationKey:['delete-assignment'],
        mutationFn: async (id)=>{
            const result = axios.delete('/delete-assignment/'+id)
            return result.data
        }
    })
    const deleteHandler = ()=>{
        //show confirmation
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                //check user 
                if(assignment.userEmail==user.email){
                    mutate(assignment._id)
                    queryClient.invalidateQueries(['assignments'])
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your assignment was deleted!.",
                        icon: "success"
                      });
                }
                else{
                    Swal.fire({
                      title: "Error!",
                      text: "Your cannot delete other user assignments!.",
                      icon: "error"
                    });
                }
            }
          });
          
    }
    const checkAuthroization =()=>{
        if(assignment.userEmail==user.email){
            navigate('/update-assignment/'+_id)
        }
        else{
            Swal.fire({
                title: "Error!",
                text: "Your cannot update other user assignments!.",
                icon: "error"
              });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-2">
                <figure className='h-44'>
                    <img
                    className='cover '
                        src={imageUrl}
                        alt="Image" />
                </figure>
                <div className="flex flex-grow card-body">
                    <h2 className="card-title text-2xl shadow-md py-2 px-4 bg-slate-100 text-red-700">
                        {title}
                    </h2>
                    <p>{description?.slice(0,50)}</p>
                        <div className="px-10 py-4 font-semibold bg-slate-100 text-red-700 border-2 shadow-lg  ">Difficulty: {difficulty?.toUpperCase()}</div>
                    <div className="card-actions flex flex-grow gap-2 border-t-2 py-2">
                        <div className="bg-slate-100 text-red-700 border-2 shadow-lg  py-3 px-4 font-semibold">Marks: {marks}</div>
                        <div className="bg-slate-100 text-green-700 border-2 shadow-lg py-4 px-4  text-xs  font-semibold">Status:  {status}</div>
                    </div>
                    
                    <div className='flex justify-between gap-3'>
                        <Link to={'/assignment/'+_id}  className='btn  btn-success text-white w-24'>View</Link>
                        {
                            user && <div className=' flex gap-4'><button onClick={checkAuthroization} className='hover:bg-green-600 hover:text-white bg-white text-red-600 border-2 px-2 flex  items-center gap-2 font-bold text-xs'><FaRegEdit className='text-lg'></FaRegEdit>Update</button>
                        <button onClick={deleteHandler} className='hover:bg-green-600 hover:text-white bg-white text-red-600 border-2 px-2 flex  items-center gap-2 font-bold text-xs'><TiDeleteOutline className='text-lg'></TiDeleteOutline> Delete</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;