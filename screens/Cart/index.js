import React from 'react';
import AppScreen from '../../components/AppScreen';
import CartList from '../../containers/CartList';

const Cart = () => {
  return (
    <AppScreen title="Cart">
      <CartList />
    </AppScreen>
  );
};

export default Cart;
