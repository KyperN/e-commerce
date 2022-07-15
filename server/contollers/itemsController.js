const Item = require('../schemes/Item');

const getItems = async (req, res) => {
  try {
    const items = await Item.find({});

    if (items.length === 0) {
      res.status(500).send({
        success: false,
        message: 'No items found',
      });
    } else {
      res.status(200).send({
        success: true,
        data: items,
      });
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: 'Server error',
    });
  }
};

const filterItems = async (req, res) => {
  if (req.query.type === 'all') {
    try {
      const items = await Item.find();
      res.status(200).send({
        success: true,
        data: items,
      });
    } catch (e) {
      res.status(500).send({
        success: false,
        message: 'Failed to query',
      });
    }
  } else {
    try {
      const items = await Item.find(req.query);
      res.status(200).send({
        data: items,
        success: true,
      });
    } catch (e) {
      res.status(500).send({
        success: false,
        message: 'Server error',
      });
    }
  }
};

module.exports = {
  getItems: getItems,
  filterItems: filterItems,
};
