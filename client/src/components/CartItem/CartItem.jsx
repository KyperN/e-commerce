import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import './CartItem.scss';
export default function CartItem({ img, title, description, price }) {
  return (
    <div className="cart-item">
      <div className="description-block">
        <img src={img} alt="Item" />
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="quantity-block">
        <button>+</button>
        <p>2</p>
        <button>-</button>
      </div>
      <div className="price-block">
        <p>{price}</p>
      </div>
    </div>
  );
}

{
  /* <Card sx={{ maxWidth: 350 }}>
  <CardMedia component="img" height="300" image={img} alt="green iguana" />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {price + ' $'}
    </Typography>
  </CardContent>
  <CardActions className="card-actions">
    <Button size="small">+1</Button>
    <Button size="small">-1</Button>
  </CardActions>
</Card>; */
}
