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
    default: {
      return { ...state };
    }
  }
};
