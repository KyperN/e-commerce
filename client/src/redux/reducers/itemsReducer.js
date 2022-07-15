const init = { items: [], loading: false };

export const itemsReducer = (state = init, action) => {
  switch (action.type) {
    case 'START_LOAD': {
      return { ...state, loading: true };
    }
    case 'LOAD_ITEMS': {
      return { ...state, items: action.payload };
    }
    case 'FINISH_LOAD': {
      return { ...state, loading: false };
    }
    case 'SORT_BY_PRICE': {
      const items = state.items.sort((a, b) => b.price - a.price);
      return { ...state, items: [...items] };
    }
    case 'SORT_BY_RATING': {
      const items = state.items.sort((a, b) => b.rating - a.rating);

      return { ...state, items: [...items] };
    }
    default: {
      return { ...state };
    }
  }
};
