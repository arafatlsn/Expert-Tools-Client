import axios from 'axios';
import React, { Children, useState } from 'react';
import useFireBase from './useFireBase';

const RequireAdmin = ({ children }) => {

  const { user } = useFireBase()
  const [isAdmin, setIsAdmin] = useState(false);

  const verifyAdmin = async () => {

    const { data } = await axios.get(
      `http://localhost:5000/verifyadmin?userEmail=${user.email}`
    );
    if ( data?.message === "Admin" ) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };
  verifyAdmin();

  if(isAdmin){
    return children;
  }

};

export default RequireAdmin;