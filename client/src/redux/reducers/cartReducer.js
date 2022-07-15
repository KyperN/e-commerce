const init = { cartItems: [] };

export const cartReducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex !== -1) {
        const updatedCart = [...state.cartItems];
        const item = { ...updatedCart[itemIndex] };
        item.quantity += 1;
        updatedCart[itemIndex] = item;
        return { ...state, cartItems: updatedCart };
      } else {
        const updatedCart = [...state.cartItems, action.payload];
        return { ...state, cartItems: updatedCart };
      }
    }
    case 'REMOVE_FROM_CART': {
      const itemIndex = state.cartItems.findIndex(
        (elem) => elem.title === action.payload.title
      );
      const updatedCart = [...state.cartItems];
      const item = { ...updatedCart[itemIndex] };
      if (item.quantity === 1) {
        const updatedCart = state.cartItems.filter(
          (elem) => elem.title !== item.title
        );
        return { ...state, cartItems: updatedCart };
      } else {
        item.quantity -= 1;
      }
      updatedCart[itemIndex] = item;
      return { ...state, cartItems: updatedCart };
    }
    default: {
      return { ...state };
    }
  }
};
