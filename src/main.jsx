import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
// import Home from './Components/Home/Home.jsx'
import Home from './Components/Home/Home.jsx'
import About  from "./Components/About/About.jsx"
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element :<Home/>
      },
      {
        path : "/Projects",
        element :<Projects/>
      },
      {
        path : "/about",
        element :<About/>
      },
      {
        path : "/Contact",
        element : <Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
