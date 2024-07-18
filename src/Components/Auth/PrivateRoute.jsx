import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LottieAnimation from '../HTMLUtilities/Animations/LottieAnimation';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <LottieAnimation/>   
    }
     else if (user) {
        return children
    }  

    else{
        return <Navigate state={location.pathname} to="/login"></Navigate>

    }
    
};

export default PrivateRoute;