import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaSignInAlt } from 'react-icons/fa'
import { IoPeopleSharp } from 'react-icons/io5'
import { GrGoogle } from 'react-icons/gr'
import useFireBase from '../FIREBASE/useFireBase';

const SignIn = () => {

  const { signInWithGoogle } = useFireBase()

  const [checked, setChecked] = useState(false);

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);


  return (
    <div className='w-[50%] h-[75vh] mx-auto bg-gradient-to-r from-[#FEEDD3] to-[#A0CBF5] px-[5rem] py-[4rem] mt-[2rem] rounded-xl'>

            <div className='flex flex-col items-center'>
              <p className='text-center text-[#1B99E5]'><IoPeopleSharp className='text-[12rem]'/></p>
              <h1 className='text-[3.5rem] text-[#1B99E5] font-bold'>Please SignIn</h1>
            </div>
            
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="relative z-0 w-full mb-6 group">
            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
            
            {...register("email")}

            />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
            
            {...register("password")}
            
            />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
            </div>
            <div class="flex items-center mb-4">
            <input onClick={() => setChecked(!checked)} id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            
            {...register("agree")}
            
            />
            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="flex items-center justify-center btn font-bold text-[1.2rem] text-white bg-[#1B99E5] py-[.7rem] w-[100%]" disabled={!checked}><FaSignInAlt className='mr-[.5rem]' /> SignIn</button>
            </form>

            <div className='flex items-center my-[1rem]'>
              <hr className='border-2 border-[#C3C3C3] w-[45%] m-0'></hr>
              <p className='m-0 w-[10%] text-[#404247] text-center text-[1.5rem]'>or</p>
              <hr className='border-2 border-[#C3C3C3] w-[45%] m-0'></hr>
            </div>

            <div>
              <button onClick={() => signInWithGoogle()} type="submit" className="flex justify-center btn font-bold text-[1.2rem] text-white bg-[#1B99E5] py-[.7rem] w-[100%]"><GrGoogle className='mr-[.5rem]' /> SignIn with Google</button>
            </div>

            </div>
    
  );
};

export default SignIn;