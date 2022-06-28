import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-content">
      <p>Shopping cart</p>
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
          <Link style={{ textDecoration: 'none' }} to="/home">
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
          />
        ))
      )}
    </div>
  );
}
