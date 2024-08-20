import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from "./Components/About/About.jsx"
import Faq from './Components/Faq/Faq.jsx'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "faq",
        element: <Faq/>,
      },
      
      
    ]
  }
     
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router = {router}/>
  </StrictMode>,
)
