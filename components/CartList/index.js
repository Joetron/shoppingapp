import * as React from 'react';
import CartItem from '../CartItem';
import { FlatList } from 'react-native';

const CartList = ({ cart, products, onAddToCart, onRemoveFromCart }) => {
  const renderItem = (props) => <CartItem {...props} />;

  const cartProducts = Object.keys(cart).map((id) => ({
    ...products[id],
    count: cart[id],
    onAddToCart: onAddToCart,
    onRemoveFromCart: onRemoveFromCart,
  }));

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={cartProducts}
      renderItem={renderItem}
    />
  );
};

export default CartList;
