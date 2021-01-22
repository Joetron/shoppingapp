import * as React from 'react';
import Product from '../Product';
import { FlatList } from 'react-native';

const ProductsList = ({ products, onAddToCart, onRemoveFromCart }) => {
  const keyExtractor = (_item, index) => index.toString();
  const renderItem = (props) => (
    <Product
      {...props}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={products}
      renderItem={renderItem}
    />
  );
};

export default ProductsList;
