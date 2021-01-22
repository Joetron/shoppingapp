import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppScreen from '../../components/AppScreen';
import CartList from '../../containers/CartList';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Cart = () => {
  return (
    <AppScreen>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cart</Text>
          <CartList />
        </View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default Cart;
