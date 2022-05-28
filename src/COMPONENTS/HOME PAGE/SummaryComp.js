import React from 'react';
import { BsGlobe, BsTools } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'

const SummaryComp = () => {
  return (
    <div className='py-[3rem] lg:flex gap-3 justify-center mt-[3rem] rounded-xl'>
      <div className='px-[2rem] py-[1.5rem] flex flex-col items-center rounded-xl' >
        <p className='text-6xl text-[#172B4D]'><BsGlobe></BsGlobe></p>
        <h1 className='text-2xl font-bold text-[#172B4D] mt-[.5rem]'>We Served 32+ Countries</h1>
      </div>
      <div className='px-[2rem] py-[1.5rem] flex flex-col items-center rounded-xl' >
        <p className='text-6xl text-[#172B4D]'><FaUsers></FaUsers></p>
        <h1 className='text-2xl font-bold text-[#172B4D] mt-[.5rem] text-center'>We Served 100k+ Customers</h1>
      </div>
      <div className='px-[2rem] py-[1.5rem] flex flex-col items-center rounded-xl' >
        <p className='text-6xl text-[#172B4D]'><BsTools></BsTools></p>
        <h1 className='text-2xl font-bold text-[#172B4D] mt-[.5rem]'>We Provide 50k+ Tools</h1>
      </div>
    </div>
  );
};

export default SummaryComp;