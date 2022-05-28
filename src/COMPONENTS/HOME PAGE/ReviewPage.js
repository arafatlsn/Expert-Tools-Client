import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ReviewCard from "./ReviewCard";

const ReviewPage = () => {
  const { data: allReviews, isLoading } = useQuery("reviews", async () => {
    const { data } = await axios.get(
      `https://enigmatic-crag-73288.herokuapp.com/reviews`
    );

    return data;
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="pt-[2.5rem]">
      <h1 className="text-4xl lg:text-5xl font-[600] text-center text-deepDark my-[2rem]">
        What Our Customers Says
      </h1>
      <div className="grid lg:grid-cols-3 px-[.5rem] lg:px-[0] gap-[1rem]">
        {allReviews?.map((el) => (
          <ReviewCard el={el}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
