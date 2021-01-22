import * as React from 'react';
import CartItem from '../CartItem';
import { FlatList } from 'react-native';

const CartList = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  const keyExtractor = (_item, index) => index.toString();
  const renderItem = (props) => (
    <CartItem
      {...props}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={cartItems}
      renderItem={renderItem}
    />
  );
};

export default CartList;
