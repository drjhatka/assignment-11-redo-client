import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'

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
      // {
      //   path: '/services',
      //   element: <AllServices />
      // },
      // {
      //   path: '/add-service',
      //   element: <PrivateRoute><AddService /></PrivateRoute>
      // },
      // {
      //   path: '/service/:id',
      //   element: <ViewService />
      // },
      // {
      //   path: '/service-todo',
      //   element: <ToDoServices />
      // },
      // {
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
      // },

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
