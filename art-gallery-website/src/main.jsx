//Basic import
import React from 'react';

//Router import
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Styles and Fonts import
import './index.scss';

//Views Import
import Home from './assets/views/Home/Home';
import Location from './assets/views/Location/Location'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,    
  },  
  {
    path: "/location",
    element: <Location />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
