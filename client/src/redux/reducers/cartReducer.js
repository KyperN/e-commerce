const init = { cartItems: [] };

export const cartReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const updatedCart = [...state.cartItems, action.payload];
      return { ...state, cartItems: updatedCart };
    }
    default: {
      return { ...state };
    }
  }
};
