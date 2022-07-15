const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

const Item = require('./schemes/Item');
const itemsController = require('./contollers/itemsController');
const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.8rkr9hz.mongodb.net/shop?retryWrites=true&w=majority'
    );
    console.log('db connected');
  } catch (err) {
    console.error('error!!!', err.message);
  }
};

app.listen(PORT, () => {
  start();
  console.log('serv run');
});

// app.get('/items', itemsController.getItems);

app.get('/filter-items', itemsController.filterItems);
