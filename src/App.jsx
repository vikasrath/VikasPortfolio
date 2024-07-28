
// import { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import {Outlet} from "react-router-dom"
// import { useNavigate } from 'react-router-dom'
function App() {

  // const navigate = useNavigate()

  // useEffect(()=>{
  //   navigate("/home")
  // },[])
  return (
 
     
    
       <div className='w-full flex'>
          <Header/>
          <Outlet/>
       </div>
  
  )
}

export default App
