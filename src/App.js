import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Products from './screens/Products';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = ({ cart }) => {
  const cartCount = Object.keys(cart).reduce(
    (accum, id) => cart[id] + accum,
    0,
  );
  const cartNavOptions = cartCount > 0 ? { tabBarBadge: cartCount } : {};

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Products') {
              iconName = focused ? 'view-list' : 'view-list';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else if (route.name === 'Checkout') {
              iconName = focused ? 'check' : 'check';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Cart" component={Cart} options={cartNavOptions} />
        <Tab.Screen name="Checkout" component={Checkout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
