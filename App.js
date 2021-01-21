import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Products from './screens/Products';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Checkout" component={Checkout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
