import * as React from 'react';
import CartItem from '../CartItem';
import { FlatList } from 'react-native';

const list = [
  {
    name: 'Apple',
    icon: 'apple',
    description: 'Red Delicious',
    count: 5,
  },
  {
    name: 'Banana',
    icon: 'banana',
    description: 'Organic',
    count: 5,
  },
];

const CartList = ({ cartItems }) => {
  const keyExtractor = (_item, index) => index.toString();
  const renderItem = (props) => <CartItem {...props} />;

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

export default CartList;
