import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Item.scss';
import { Rating } from '@mui/material';
import Modal from '../Modal/Modal';

export default function Item({
  title,
  description,
  price,
  img,
  rating,
  cartHandle,
}) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" height="300" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Rating readOnly value={rating} max={10} />
        <Typography variant="body2" color="text.secondary">
          {price + ' $'}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button onClick={cartHandle} size="small">
          Add to cart
        </Button>

        <Modal img={img} title={title} />
      </CardActions>
    </Card>
  );
}
