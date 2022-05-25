import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFireBase from './useFireBase';

const RequireAuth = ({ children }) => {

  const location = useLocation()
  
  const { user, loading } = useFireBase()

  if(loading){
    return;
  }

  if(!user){

    return <Navigate to={'/signin'} state={{ from: location }} replace />

  }

  return children

};

export default RequireAuth;