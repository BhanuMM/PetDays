import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import "../styles/ad.css";

const stripePromise = loadStripe("pk_test_51LwBrDCeYmYZru3ySMwHiZCiS6CaQIvBYbnIoqqt0r7xbd7eVzXvAPIT6vU9CbuLJBUqDBh2baE80H9RKPeH9jTI00rv0Bff04");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/service/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: location.state  }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}