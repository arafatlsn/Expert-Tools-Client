import React from 'react';
import CarouselComp from './CarouselComp';
import HomePageTools from './HomePageTools';
import SummaryComp from './SummaryComp';

const HomePage = () => {
  return (
    <div>
      <CarouselComp></CarouselComp>
      <SummaryComp></SummaryComp>
      <HomePageTools></HomePageTools>
    </div>
  );
};

export default HomePage;