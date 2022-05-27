import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";
import { Rating } from "flowbite-react";

const ReviewCard = ({ el }) => {
  const { userName, reviewDate, review, ratings } = el;

  let arr = []
  let count = 1;
  for(let i = 1; i <= 5; i++){
    if(count <= ratings){
      arr.push(true)
      count = count + 1;
    }
    else{
      arr.push(false)
    }
  }

  return (
    <div>
      <div className=" py-[1rem] px-[.8rem] border shadow-lg"> 
        <div className="flex">
          <p>
            <CgProfile className="text-[1.7rem] mr-[.3rem]" />
          </p>
          <p className="text-lg">{userName}</p>
        </div>
        <div className="flex">
          <h1>Ratings: </h1>
          <Rating>
            {
              arr.map(el => <Rating.Star filled={el} />)
            }
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {ratings} out of 5
            </p>
          </Rating>
        </div>
        <div>
          <h1>Date: {reviewDate}</h1>
          <p className="h-[33ex] leading-[3ex] overflow-hidden">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
