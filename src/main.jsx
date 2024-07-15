import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Assignments from './Components/Assignments/Assignments.jsx'
import PrivateRoute from './Components/Auth/PrivateRoute.jsx'
import AddAssignment from './Components/Assignments/AddAssignment.jsx'
import ViewAssignment from './Components/Assignments/ViewAssignment.jsx'
import ThemeProvider from './Components/Contexts/ThemeProvider.jsx'
import AuthProvider from './Components/Contexts/AuthProvider.jsx'
import DataProvider from './Components/Contexts/DataProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Login from './Components/Auth/Login.jsx'
import Register from './Components/Auth/Register.jsx'
import PendingAssignments from './Components/Assignments/PendingAssignments.jsx'


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/assignments',
        element: <Assignments />
      },
      {
        path: '/assignment/:id',
        element: <ViewAssignment />
      },
      {
        path: '/create-assignment',
        element: <PrivateRoute><AddAssignment /></PrivateRoute>
      },
      {
        path:'/pending-assignments',
        element:<PendingAssignments></PendingAssignments>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },


    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <DataProvider>
        <AuthProvider>
          <ThemeProvider>
            <RouterProvider router={router}>
              <ReactQueryDevtools initialIsOpen={true} />
            </RouterProvider>
          </ThemeProvider>
        </AuthProvider >
      </DataProvider >

    </QueryClientProvider >
  </React.StrictMode >
)
