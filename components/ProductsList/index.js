import * as React from 'react';
import Product from '../Product';
import { FlatList } from 'react-native';

const ProductsList = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  const renderItem = (props) => <Product {...props} />;

  const cartProducts = Object.keys(products).map((id) => ({
    ...products[id],
    count: id in cart ? cart[id] : 0,
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

export default ProductsList;
