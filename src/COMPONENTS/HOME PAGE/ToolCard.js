import { Button } from 'flowbite-react';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const ToolCard = ({ el }) => {

  const { _id, name, img, description, price, minimum_order, quantity } = el;

  return (
    <div className='w-[302px]'>
      
      <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className='flex justify-center'>
          <img class="p-8 rounded-t-lg w-[302px] h-[302px] object-contain" src={img}/>
        </div>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden h-[7ex] leading-[3.5ex]" title={name}>{name}</h5>
          <p className='text-[dimgray] h-[10ex] leading-[3.3ex] overflow-hidden'>Description: {description}</p>
          <p className='text-deepDark font-[600]'>Minimum Order: {minimum_order}</p>
          <p className='text-deepDark font-[600]'>Stock: {quantity}</p>
          <div className='flex items-center justify-between'>
            <p className='text-deepDark text-2xl font-bold'>${price}</p>
            <Link to={`/tool/${_id}`} className='uppercase font-bold flex items-center px-[.8rem] rounded-lg py-[.4rem] bg-lightBlue text-secondary hover:text-deepDark'>
              <HiShoppingCart className="mr-2 h-5 w-5" />
              Purchase
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ToolCard;