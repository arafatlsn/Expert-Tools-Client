import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import MostSoldsCards from "./MostSoldsCards";

const MostSoldProds = () => {
  const arr = [];
  const arrToolId = [];

  const { data: allOrders, isLoading } = useQuery("most-solds", async () => {
    const { data } = await axios.get(
      `https://enigmatic-crag-73288.herokuapp.com/allorders`
    );
    data.map((el) => {
      const arrFind = arr.find((elFind) => elFind.toolId === el.toolId);
      if (!arrFind) {
        arr.push(el);
        arrToolId.push(el.toolId);
      } else {
        const index = arrToolId.indexOf(el.toolId);
        const prevQuantity = arr[index].orderQuantity;
        const prstnQuantity = el.orderQuantity;
        const updateQuantity = Number(prevQuantity) + Number(prstnQuantity);
        el["orderQuantity"] = updateQuantity;
        arr.splice(arrToolId.indexOf(el.toolId), 1);
        arr.push(el);
      }
    });
    const newArr = arr.sort(function (a, b) {
      return Number(a.orderQuantity) - Number(b.orderQuantity);
    });
    return newArr.reverse();
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="mt-[2.5rem] py-[1rem] px-[.8rem] bg-[#EEEEEE]">
      <h1 className="text-xl font-[600] text-green-400 mt-[2rem] mb-[1rem]">
        Most Sold Products
      </h1>
      <div className="grid gap-[1rem] grid-cols-2 lg:grid-cols-6">
        {allOrders.map((el) => (
          <MostSoldsCards el={el}></MostSoldsCards>
        ))}
      </div>
    </div>
  );
};

export default MostSoldProds;
