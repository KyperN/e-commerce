import React from 'react';
import { useDispatch } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

import './CartItem.scss';
export default function CartItem({ title, img, description, price, quantity }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { title: title } });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { title: title } });
  };

  return (
    <div className="cart-item">
      <div className="description-block">
        <img src={img} alt="Item" />
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="quantity-block">
        <AddCircleOutlineRoundedIcon
          style={{ cursor: 'pointer', marginRight: 10 }}
          onClick={addToCart}
        />

        <p>{quantity}</p>
        <RemoveCircleOutlineRoundedIcon
          style={{ cursor: 'pointer', marginLeft: 10 }}
          onClick={removeFromCart}
        />
      </div>
      <div className="price-block">
        <p>${price}</p>
      </div>
    </div>
  );
}
