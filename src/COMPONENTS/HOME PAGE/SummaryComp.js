import React from 'react';
import { BsGlobe } from 'react-icons/bs'

const SummaryComp = () => {
  return (
    <div className='py-[3rem] flex gap-3 justify-center mt-[3rem] rounded-xl'>
      <div className='px-[2rem] py-[1.5rem] flex flex-col items-center rounded-xl' >
        <p className='text-6xl text-[#172B4D]'><BsGlobe></BsGlobe></p>
        <h1 className='text-2xl font-bold text-[#172B4D] mt-[.5rem]'>We Served 32+ Countries</h1>
      </div>
      <div className='px-[2rem] py-[1.5rem] flex flex-col items-center rounded-xl' >
        <p className='text-6xl text-[#172B4D]'><BsGlobe></BsGlobe></p>
        <h1 className='text-2xl font-bold text-[#172B4D] mt-[.5rem]'>We Served 32+ Countries</h1>
      </div>
      <div className='px-[2rem] py-[1.5rem] flex flex-col items-center rounded-xl' >
        <p className='text-6xl text-[#172B4D]'><BsGlobe></BsGlobe></p>
        <h1 className='text-2xl font-bold text-[#172B4D] mt-[.5rem]'>We Served 32+ Countries</h1>
      </div>
    </div>
  );
};

export default SummaryComp;