import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/userSlice'



function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response =await axios.get("http://localhost:3001")
        dispatch(getUser(response.data));
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Users />}/>
    <Route path='/create' element={<CreateUser />}/>
    <Route path='/edit/:id' element={<UpdateUser />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
