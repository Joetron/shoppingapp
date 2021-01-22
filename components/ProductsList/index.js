import * as React from 'react';
import Product from '../Product';
import { FlatList } from 'react-native';
// name, description, imageUri
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

const ProductsList = ({ products }) => {
  const keyExtractor = (_item, index) => index.toString();
  const renderItem = (props) => <Product {...props} />;

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

export default ProductsList;
