import React from 'react';
import useHomeTools from '../../Hooks/useHomeTools';
import ToolCard from './ToolCard';

const HomePageTools = () => {

  const toolsData = useHomeTools()

  let toolsArr;
  if(toolsData?.homeTools?.length){
    const {homeTools} = toolsData;
    toolsArr = homeTools
  }

  console.log(toolsArr)

  return (
    <div>
      <h1 className='text-6xl font-[600] text-center text-deepDark my-[2rem]'>Our Products</h1>
      <div className='grid lg:grid-cols-4 justify-center justify-items-center gap-[3rem]'>
      {
        toolsArr?.map(el => <ToolCard el={el}></ToolCard>)
      }
      </div>
    </div>
  );

};

export default HomePageTools;