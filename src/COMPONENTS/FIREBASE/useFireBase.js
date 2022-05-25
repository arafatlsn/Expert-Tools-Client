import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';

const useFireBase = () => {
  // sign in with google 
  const [signInWithGoogle, userSignInGoogle, loadingSignInGoogle, errorSignInGoogle] = useSignInWithGoogle(auth);

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

  // load user 
  const [user, loading, error] = useAuthState(auth);

  return { signInWithGoogle, createUserWithEmailAndPassword, errorCreateEmailPass, updateProfile, signInWithEmailAndPassword, errorSignInEmailPass, user, loading }
};

export default useFireBase;