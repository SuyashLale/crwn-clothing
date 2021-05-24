import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
}) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#x2718;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
