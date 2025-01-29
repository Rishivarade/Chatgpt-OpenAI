import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './routes/dashboardpage/dashboard';
import Chatpage from './routes/chatpage/chatpage';
import Home from './routes/homepage/Home';
import Rootlayout from './layouts/rootlayout/Rootlayout';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Signinpage from './routes/signinpage/signinpage';
import Signuppage from './routes/signuppage/signuppage';





const router = createBrowserRouter([
  {
    element:<Rootlayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/sign-in/*",
        element:<Signinpage/>
      },
      {
        path:"/sign-up/*",
        element:<Signuppage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<Chatpage/>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
