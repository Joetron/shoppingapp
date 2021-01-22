import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  let productCount;

  switch (type) {
    case ADD_TO_CART:
      productCount = state[payload] || 0;
      productCount++;
      return { ...state, [payload]: productCount };
    case REMOVE_FROM_CART:
      productCount = state[payload];
      if (typeof productCount === 'number') {
        productCount--;
        const removedState = { ...state };
        removedState[payload] = productCount;
        if (productCount < 1) {
          delete removedState[payload];
        }
        return removedState;
      }
      return state; // should not be here
    default:
      return state;
  }
}
