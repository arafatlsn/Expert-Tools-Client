import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';

const useFireBase = () => {
  // sign in with google 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // create use with email pass 
  const [
    createUserWithEmailAndPassword,
    userCreateEmailPass,
    loadingCreateEmailPass,
    errorCreateEmailPass,
  ] = useCreateUserWithEmailAndPassword(auth);

  // update profile info 
  const [updateProfile, updatingUpdateProfile, errorUpdateProfile] = useUpdateProfile(auth);

  console.log(userCreateEmailPass)

  return { signInWithGoogle, createUserWithEmailAndPassword, updateProfile }
};

export default useFireBase;