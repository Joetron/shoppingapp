import * as React from 'react';
import CartItem from '../CartItem';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-elements';

const CartList = ({ cart, products, onAddToCart, onRemoveFromCart }) => {
  const renderItem = (props) => <CartItem {...props} />;

  const cartProducts = Object.keys(cart).map((id) => ({
    ...products[id],
    count: cart[id],
    onAddToCart: onAddToCart,
    onRemoveFromCart: onRemoveFromCart,
  }));

  return cartProducts.length > 0 ? (
    <FlatList
      keyExtractor={(item) => item.id}
      data={cartProducts}
      renderItem={renderItem}
    />
  ) : (
    <View>
      <Text h4>Cart is empty</Text>
    </View>
  );
};

export default CartList;
