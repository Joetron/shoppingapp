import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {
  apple: {
    id: 'apple',
    name: 'Apple',
    icon: 'apple',
    description: 'Red Delicious',
  },
  banana: {
    id: 'banana',
    name: 'Banana',
    icon: 'banana',
    description: 'Organic',
  },
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
}
