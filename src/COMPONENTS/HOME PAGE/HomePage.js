import React from 'react';
import SpinnerComp from '../SHARED/Spinner';
import CarouselComp from './CarouselComp';
import HomePageTools from './HomePageTools';
import LessStockProds from './LessStockProds';
import MostSoldProds from './MostSoldProds';
import ReviewPage from './ReviewPage';
import SummaryComp from './SummaryComp';

const HomePage = () => {
  return (
    <div>
      <CarouselComp></CarouselComp>
      <SummaryComp></SummaryComp>
      <HomePageTools></HomePageTools>
      <MostSoldProds></MostSoldProds>
      <LessStockProds></LessStockProds>
      <ReviewPage></ReviewPage>
    </div>
  );
};

export default HomePage;