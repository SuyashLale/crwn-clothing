import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51Iw9vnSIjZ9eE3bk6nPRbxoC995I6O3ZmOfBgLN8GvZNCJiuW6EdyTFodaX0PmWq1PMMakQLv1UzQ9kPvRIKtViz00ASC3fFkd";
  const onToken = (token) => {
    console.log(token);
    alert("Your payment was successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Portfolio"
      billingAddress
      shippingAddress
      currency="INR"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is INR ${price}`}
      amount={stripePrice}
      PanelLabe="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;