import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = [];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return [...state, payload];
    case REMOVE_FROM_CART:
      return state.splice(
        state.findIndex((item) => item.id === payload),
        1,
      );
    default:
      return state;
  }
}
