import React from 'react';
import { Navigate } from 'react-router-dom';
import {useMyContext} from './MyContext';


const PrivateRoute = ({ children }) => {
   const { isLogin } = useMyContext();

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;