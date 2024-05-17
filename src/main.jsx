import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Aboutme from './Components/AboutMe/Aboutme';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      }
      ,

      {
        path: '/aboutme',
        element: <Aboutme/>
      },

      {
        path: '/resume',
        element: <Resume/>
      },

      {
        path:'/portfolio',
        element: <Portfolio/>
      },

      {
        path: '/testimonial',
        element: <Testimonial/>
      },

      {
        path: '/contact',
        element: <Contact/>
      }


    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)