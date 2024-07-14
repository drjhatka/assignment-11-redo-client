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
        element: <Assignments/>
      },
      {
        path:'/assignment/:id',
        element:<ViewAssignment/>
      },
      {
        path: '/create-assignment',
        element: <PrivateRoute><AddAssignment/></PrivateRoute>
      },      
       
    
      {/* // {
      //   path: '/provider-services',
      //   element: <PrivateRoute><UserServices /></PrivateRoute>
      // },
      // {
      //   path: '/update-service/:id',
      //   element: <PrivateRoute><EditService /></PrivateRoute>
      // },
      // {
      //   path: '/create-booking/:serviceId',
      //   element: <PrivateRoute><AddBooking /></PrivateRoute>
      // },
      // {
      //   path: '/bookings',
      //   element: <PrivateRoute><ManageBookings /></PrivateRoute>
      // },
      // {
      //    path: '/login',
      //   element: <Login />
      // },
      // {
      //   path: '/register',
      //   element: <Register />
      // }, */}

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient} >
        <DataProvider>
      <AuthProvider>
          <ThemeProvider> */}
    <RouterProvider router={router}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </RouterProvider>
    
</React.StrictMode>
//</ThemeProvider>
    //   </AuthProvider >
    //     </DataProvider >

    // </QueryClientProvider >
  //</React.StrictMode >
)
