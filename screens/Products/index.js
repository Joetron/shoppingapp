import React from 'react';
import AppScreen from '../../components/AppScreen';
import ProductsList from '../../containers/ProductsList';

const Products = () => {
  return (
    <AppScreen title="Products">
      <ProductsList />
    </AppScreen>
  );
};

export default Products;
