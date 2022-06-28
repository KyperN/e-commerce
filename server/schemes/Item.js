const mongoose = require('mongoose');

const itemSchemme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      default:
        'https://cdn.shopify.com/s/files/1/0068/8209/9284/products/iPhonex-spacegrey-600x600_600x600.jpg?v=1602074044',
    },
    type: {
      type: String,
      required: true,
    },
  },
  { collection: 'items' }
);

module.exports = mongoose.model('Item', itemSchemme);
