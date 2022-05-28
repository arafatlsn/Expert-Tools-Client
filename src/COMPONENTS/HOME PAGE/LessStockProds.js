import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import LessStockCard from "./LessStockCard";

const LessStockProds = () => {
  const { data: lessStock, isLoading } = useQuery("less-stock", async () => {
    const { data } = await axios.get(
      `https://enigmatic-crag-73288.herokuapp.com/alltools`
    );
    return data;
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="mt-[2.5rem] p-[1rem] px-[.8rem] bg-[#EEEEEE]">
      <h1 className="text-xl font-[600] mt-[2rem] mb-[1rem] text-[#E73D50]">
        Less Stock Products
      </h1>
      <div className="grid gap-[1rem] grid-cols-2 lg:grid-cols-6">
        {lessStock?.map((el) => (
          <LessStockCard el={el}></LessStockCard>
        ))}
      </div>
    </div>
  );
};

export default LessStockProds;
