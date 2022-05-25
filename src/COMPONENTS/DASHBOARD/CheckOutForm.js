import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";

const CheckOutForm = ({ orderToolInfo }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState(false);

  const  price  = orderToolInfo?.price;
  const fullName = orderToolInfo?.fullName;
  const clientEmail = orderToolInfo?.email;
  const toolId = orderToolInfo._id;

  useEffect(() => {

    fetch(`http://localhost:5000/paymentintent`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt-token')}`
      },
      body: JSON.stringify({ price })
    })
    .then(res => res.json())
    .then(data => {
      if(data?.clientSecret){
        setClientSecret(data?.clientSecret);
      }
      else{

      }
    })

  }, [price]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setErrorMsg(error?.message || "");

    // confirm card payment 
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: fullName,
            email: clientEmail
          },
        },
      },
    );

    if(intentError){
      setErrorMsg(intentError?.message)
    }
    else{
      setErrorMsg('');
      setSuccess(true);

      const func = async() => {
        const { data } = await axios.put(`http://localhost:5000/paymentsuccess?trxId=${paymentIntent.id}&toolId=${toolId}`)
        console.log(data)
      }
      func()

    }


  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p>{errorMsg && errorMsg}</p>
    </div>
  );
};

export default CheckOutForm;
