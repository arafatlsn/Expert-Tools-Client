import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { AiOutlinePayCircle } from "react-icons/ai";
import SuccessAlert from "../SHARED/SuccessAlert";
import ErrorComp from "../Error/ErrorComp";

const CheckOutForm = ({ orderToolInfo }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const price = orderToolInfo?.price;
  const fullName = orderToolInfo?.fullName;
  const clientEmail = orderToolInfo?.email;
  const toolId = orderToolInfo._id;

  useEffect(() => {
    fetch(`https://enigmatic-crag-73288.herokuapp.com/paymentintent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        } else {
        }
      });
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
    if (error?.message) {
      error && setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
    }
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: fullName,
            email: clientEmail,
          },
        },
      });

    if (intentError) {
      setErrorMsg(intentError?.message);
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
    } else {
      setErrorMsg("");

      const func = async () => {
        const { data } = await axios.put(
          `https://enigmatic-crag-73288.herokuapp.com/paymentsuccess?trxId=${paymentIntent.id}&toolId=${toolId}`
        );
        if (data?.modifiedCount) {
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 5000);
        }
      };
      func();
    }
  };

  return (
    <div>
      {alert && <SuccessAlert message={"Payment Done"}></SuccessAlert>}
      {errorAlert && <ErrorComp message={errorMsg}></ErrorComp>}
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
        <button
          className="uppercase flex bg-lightBlue text-secondary hover:text-deepDark font-bold rounded-lg px-[2rem] py-[.5rem] mt-[2.5rem]"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          <AiOutlinePayCircle className="mr-1 h-5 w-5" /> Payment
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
