import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';

const useFireBase = () => {
  // sign in with google 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // sign in with email pass 
  const [
    signInWithEmailAndPassword,
    userSignInEmailPass,
    loadingSignInEmailPass,
    errorSignInEmailPass,
  ] = useSignInWithEmailAndPassword(auth);

  // create use with email pass 
  const [
    createUserWithEmailAndPassword,
    userCreateEmailPass,
    loadingCreateEmailPass,
    errorCreateEmailPass,
  ] = useCreateUserWithEmailAndPassword(auth);

  // update profile info 
  const [updateProfile, updatingUpdateProfile, errorUpdateProfile] = useUpdateProfile(auth);

  console.log(userSignInEmailPass, errorSignInEmailPass?.message?.split(':')[1]?.split('/')[1]?.split(')')[0])

  return { signInWithGoogle, createUserWithEmailAndPassword, errorCreateEmailPass, updateProfile, signInWithEmailAndPassword, errorSignInEmailPass }
};

export default useFireBase;