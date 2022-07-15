import { Button, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
export default function Cart() {
  const [coupon, setCoupon] = useState('');
  const cartItems = useSelector((state) => state.cart.cartItems);
  const code = 'qwerty';

  let total = 0;
  cartItems.forEach((elem) => {
    elem.quantity > 1
      ? (total += elem.price * elem.quantity)
      : (total += elem.price);
    // eslint-disable-next-line no-unused-expressions
  });

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((elem) => {
      elem.quantity > 1
        ? (total += elem.price * elem.quantity)
        : (total += elem.price);
      // eslint-disable-next-line no-unused-expressions
    });

    return coupon === code ? total * 0.8 : total;
  };

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
  };

  const validateCoupon = () => {
    if (coupon.length > 0) {
      return coupon === 'qwerty' ? 'success' : 'warning';
    }
  };

  return (
    <div className="cart-content">
      <h1 className="title">My Shopping Cart</h1>
      <div className="cart-text">
        <p className="description">Description</p>
        <p className="quantity">Quantity</p>
        <p className="price">Price</p>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty-cart-content">
          <img
            className="cart-img"
            src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png"
            alt="cart img"></img>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Button className="btn" variant="contained">
              Look for items
            </Button>
          </Link>
        </div>
      ) : (
        cartItems.map((item) => (
          <CartItem
            className="cart-item"
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
            rating={item.rating}
            quantity={item.quantity}
          />
        ))
      )}
      <div className="cart-footer ">
        <div className="discount-block">
          <TextField
            color={validateCoupon()}
            success={true}
            onChange={handleCoupon}
            id="outlined-basic"
            label="Coupon"
            variant="outlined"
          />
        </div>

        <p>
          Total:
          {calculateTotal} {coupon === code ? total * 0.8 : total} $
        </p>
      </div>

      <Button
        disabled={cartItems.length === 0}
        style={{ marginBottom: 10 }}
        variant="outlined">
        Place order
      </Button>
    </div>
  );
}
