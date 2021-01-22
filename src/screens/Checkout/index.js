import React from 'react';
import AppScreen from '../../components/AppScreen';
import ConnectedCheckout from '../../containers/Checkout';

const Checkout = () => {
  return (
    <AppScreen title="Checkout">
      <ConnectedCheckout />
    </AppScreen>
  );
};

export default Checkout;
