export const loadItems = (val) => {
  return { type: 'LOAD_ITEMS', payload: val };
};

export const startLoad = () => {
  return { type: 'START_LOAD' };
};

export const finishLoad = () => {
  return { type: 'FINISH_LOAD' };
};

export const addToCart = (val) => {
  val.quantity = 1;
  return { type: 'ADD_TO_CART', payload: val };
};

export const removeFromCart = (val) => {
  return { type: 'REMOVE_FROM_CART' };
};

export const sortByPrice = () => {
  return { type: 'SORT_BY_PRICE' };
};
export const sortByRating = () => {
  return { type: 'SORT_BY_RATING' };
};
