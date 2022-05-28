import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useQuery } from "react-query";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51L3OEHI9eBaJh56ORYWF6zyhsgvgf5CQL8DIXNioyReBpBRfbXyW40CmunxLrFTruqIkWdNbQqf9ja3rLaWeIlPR00WbxrjwjL"
);
const PaymentPage = () => {
  const { id } = useParams();

  const { data: orderToolInfo, isLoading } = useQuery("order", async () => {
    const { data } = await axios.get(
      `http://localhost:5000/paymentorder?toolId=${id}`
    );
    return data;
  });

  if (isLoading) {
    return;
  }

  const { img, name, fullName, orderQuantity, paymentStatus, price, phoneNumber, address } = orderToolInfo;


  return (
    <div className="grid lg:grid-cols-2 px-[.5rem] lg:px-0 ">
      <div>
        <div className="flex justify-center mb-[1rem]">
          <img
            className="w-[220px] lg:w-[538px] h-[220px] lg:h-[538px] object-contain"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className="bg-[#DAF0D8] px-[1rem] py-[.7rem]">{name}</h1>
          <p className="mt-[.4rem]">
            <span className="underline text-[#E73D50]">Buyer Info:</span> <br />
            <span>{fullName}</span>
          </p>
          <p>Address: {address}</p>
          <p>Phone: {phoneNumber}</p>
          <hr className="my-[1rem]" />
          <p style={{ color: "rgba(48, 56, 65, .9)" }}>
            <span style={{ color: "rgba(60, 196, 114, 1)" }}>Order Amount: </span>
            {orderQuantity}
          </p>
          <p className="text-base" style={{ color: "rgba(48, 56, 65, .9)" }}>
            <span>Payment Status: </span>
            {paymentStatus}
          </p>
          <hr className="my-[1rem]" />
          <h3 className="text-[2rem]" style={{ color: "rgba(48, 56, 65, .9)" }}>
            Total Cost: ${price}
          </h3>
          <p className="underline text-[#E73D50] mb-[.3rem]">Payment Method:</p>
          <div>
            <div>
            </div>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckOutForm orderToolInfo={orderToolInfo}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
