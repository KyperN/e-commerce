const Item = require('../schemes/Item');

const getItems = async (req, res) => {
  try {
    const items = await Item.find({});

    if (items.length === 0) {
      res.status(500).send('Cant find items');
    } else {
      res.status(200).send(items);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const filterItems = async (req, res) => {
  if (req.query.type === 'all') {
    try {
      const items = await Item.find();
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  } else {
    try {
      const items = await Item.find(req.query);
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
};

module.exports = {
  getItems: getItems,
  filterItems: filterItems,
};
