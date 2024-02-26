import React from 'react'
import ReactDOM from 'react-dom/client';
import {NextUIProvider} from "@nextui-org/react";

import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import MySkils from './Components/Home/MySkills/MySkils';
import MyProjects from './Components/Home/MyProjects/MyProjects';
import Blogs from './Components/Home/Blogs/Blogs';
import Contact from './Components/Home/Contact/Contact';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutme',
        element: <AboutUs/>
      },
      {
        path: '/resume',
        element: <MySkils/>
      },
      {
        path: '/projects',
        element: <MyProjects/>
      },
      {
        path: '/blog',
        element: <Blogs/>
      },
      {
        path:'/contact',
        element: <Contact/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  

    <NextUIProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
    </NextUIProvider>


)
