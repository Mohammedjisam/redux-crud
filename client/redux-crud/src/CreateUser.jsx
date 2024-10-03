import React, { useState } from 'react'
import axios from 'axios'
import { addUser } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CreateUser() {

   const[name,setName]=useState();
   const[email,setEmail]=useState()
   const[age,setAge]=useState()

   const dispatch =useDispatch();
   const navigate = useNavigate();

   const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/create',{name,email,age})
    .then(res=>{
        dispatch(addUser(res.data))
        navigate('/')
        console.log(res)
    })
    .catch(err=>console.log(err))
   }


  return (
    <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div className='mb-2'>
                <label htmlFor=''>Name</label>
                <input
                type='text'
                placeholder='enter the Name'
                className='form-control'
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input 
                type='email'
                placeholder='Enter the email'
                className='form-control'
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Age</label>
                <input 
                type='number'
                placeholder='Enter the age'
                className='form-control'
                onChange={(e)=>setAge(e.target.value)}
                />
            </div>
            <div>
            <button className='btn btn-sm btn-success me-2 '>Update</button>
            </div>
                   
        </form>
        </div>
        </div>
  )
}

export default CreateUser
