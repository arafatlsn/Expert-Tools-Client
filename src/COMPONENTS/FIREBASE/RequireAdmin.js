import axios from 'axios';
import { useState } from 'react';
import useFireBase from './useFireBase';

const RequireAdmin = ({ children }) => {

  const { user, loading } = useFireBase()
  const [isAdmin, setIsAdmin] = useState(false);

  if(loading){
    return;
  }

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