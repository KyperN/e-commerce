import React from 'react';
import './Items.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import Item from '../Item/Item';
import { addToCart } from '../../redux/actions/actions';
import { Modal } from '@mui/material';
export default function Items() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const loading = useSelector((state) => state.items.loading);

  const cartHandle = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="content">
      {loading ? (
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      ) : items.length === 0 ? (
        <h1>No items available</h1>
      ) : (
        items.map((item) => {
          return (
            <Item
              title={item.title}
              description={item.description}
              price={item.price}
              img={item.img}
              rating={item.rating}
              cartHandle={() => {
                cartHandle(item);
              }}
            />
          );
        })
      )}
      <Modal />
    </div>
  );
}
