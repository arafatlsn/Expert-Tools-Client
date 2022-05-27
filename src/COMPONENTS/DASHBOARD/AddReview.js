import axios from 'axios';
import { Label, Textarea } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SuccessAlert from '../SHARED/SuccessAlert';
import useFireBase from '../FIREBASE/useFireBase'

const AddReview = () => {

  const { user } = useFireBase()
  const { register, handleSubmit, reset } = useForm();
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(false);

  const onSubmit = data => {
    
    const review = text;
    const ratings = data.ratings;
    const reviewDate = new Date().toLocaleString().split(',')[0];
    const userName = user?.displayName;
    const userReview = { review, ratings, reviewDate, userName }

    const func = async() => {
      const { data } = await axios.post(`http://localhost:5000/addreview`, userReview);
      if(data.insertedId){
        setAlert(true)
        reset()
        setTimeout(() => {
          setAlert(false)
        }, 5000)
      }
    }

    func()

  };

  return (
    <div className='mt-[.5rem]'>{alert && <SuccessAlert message={'Added a Review'}></SuccessAlert>}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="textarea" className='mb-[1rem]'>
              <Textarea
                id="comment"
                placeholder="Leave a review..."
                required={true}
                rows={4}
                onBlur={e => setText(e.target.value)}
              />
            </div>
            <label for="underline_select" class="sr-only">Underline select</label>
            <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              {...register("ratings")}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit" className="flex items-center justify-center btn font-bold text-[1.2rem] text-white bg-[#1B99E5] py-[.7rem] w-[100%] mt-[5rem]">Add Review</button>
          </form>
      </div>
    </div>
  );
};

export default AddReview;