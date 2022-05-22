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
      <ToolCard></ToolCard>
    </div>
  );

};

export default HomePageTools;