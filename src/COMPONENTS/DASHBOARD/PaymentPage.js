import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import CheckOutForm from "./CheckOutForm";
import { useQuery } from "react-query";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51L3OEHI9eBaJh56ORYWF6zyhsgvgf5CQL8DIXNioyReBpBRfbXyW40CmunxLrFTruqIkWdNbQqf9ja3rLaWeIlPR00WbxrjwjL"
);
const PaymentPage = () => {
  const { id } = useParams();

  const { data: orderToolInfo, isLoading } = useQuery('order', async() => {
    const { data } = await axios.get(`http://localhost:5000/paymentorder?toolId=${id}`);
    return data
  })

  if(isLoading){

    return;

  }

  console.log(orderToolInfo)

  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm orderToolInfo={orderToolInfo}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
