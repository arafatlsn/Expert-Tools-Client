import { Carousel } from 'flowbite-react';
import React from 'react';

const CarouselComp = () => {
  return (
    <div>
      <Carousel slide={true}>
        <div className='w-[100%] h-[100%] relative'>
          <img
          className='w-[100%] h-[100%] object-cover absolute'
            src="banner1.png"
            alt="..."
          />
          <div className='absolute z-50 flex justify-items-center bottom-[10%] lg:left-[20%]'>
            <h1 className='text-2xl text-center shadow-lg text-white font-bold'>Get 50% off gift wrap service with code GIFTWRAP50. Offered by Expert Tools</h1>
          </div>
        </div>
        <div className='w-[100%] h-[100%] relative'>
          <img
          className='w-[100%] h-[100%] object-cover absolute'
            src="banner2.jpg"
            alt="..."
          />
          <div className='absolute z-50 flex justify-items-center bottom-[10%] lg:left-[20%]'>
            <h1 className='text-2xl text-center shadow-lg text-white font-bold'>Get 50% off gift wrap service with code GIFTWRAP50. Offered by Expert Tools</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;