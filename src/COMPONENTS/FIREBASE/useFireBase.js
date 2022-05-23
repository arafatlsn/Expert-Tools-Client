import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';

const useFireBase = () => {
  // sign in with google 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return { signInWithGoogle }
};

export default useFireBase;