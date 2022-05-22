import { Carousel } from 'flowbite-react';
import React from 'react';

const CarouselComp = () => {
  return (
    <div>
      <Carousel slide={true}>
        <div className='w-[100%] h-[100%] relative'>
          <img
          className='w-[100%] h-[100%] object-cover absolute'
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <div className='absolute z-50 flex justify-items-center bottom-[15%] left-[42%] lg:left-[46%]'>
            <h1 className='text-2xl text-primary font-bold'>hello world</h1>
          </div>
        </div>
        <div className='w-[100%] h-[100%] relative'>
          <img
          className='w-[100%] h-[100%] object-cover absolute'
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <div className='absolute z-50 flex justify-items-center bottom-[15%] left-[42%] lg:left-[46%]'>
            <h1 className='text-2xl text-red-500 font-bold'>hello world</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;