export const loadItems = (val) => {
  console.log(val);
  return { type: 'LOAD_ITEMS', payload: val };
};

export const startLoad = () => {
  return { type: 'START_LOAD' };
};

export const finishLoad = () => {
  return { type: 'FINISH_LOAD' };
};

export const addToCart = (val) => {
  return { type: 'ADD_TO_CART', payload: val };
};
