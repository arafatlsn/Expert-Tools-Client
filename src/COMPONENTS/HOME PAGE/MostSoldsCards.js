import React from 'react';

const MostSoldsCards = ({ el }) => {

  const { img, name, orderQuantity } = el;

  return (
    <div className='bg-white p-[.5rem]'>
      <div className='flex justify-center'>
        <img className='w-[203px] h-[203px] object-contain' src={img} alt="" />
      </div>
      <div className='mt-[.5rem]'>
        <h1 className='h-[7ex] leading-[3.5ex] overflow-hidden'>{name}</h1>
        <p className='text-green-500'>Sold: {orderQuantity} units</p>
      </div>
    </div>
  );
};

export default MostSoldsCards;