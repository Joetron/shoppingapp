import * as React from 'react';
import { Image, Button, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { formatDollars } from '../../utils';

const CheckoutList = ({ products, cart, onPurchaseProducts }) => {
  const checkoutIcons = Object.keys(cart).map((id) => products[id].src);
  const totalPrice = Object.keys(cart).reduce((accum, id) => {
    const product = products[id];
    const count = cart[id];
    return count * product.price + accum;
  }, 0);

  const isEmpty = checkoutIcons.length < 1;

  return (
    <>
      <View style={styles.items}>
        <Text h4>Your items: </Text>
      </View>
      <View style={styles.items}>
        {checkoutIcons.map((src, i) => (
          <Image key={i} source={src} style={styles.image} />
        ))}
      </View>
      <View style={styles.view}>
        <Text h4>
          {isEmpty
            ? 'Cart is empty'
            : `Order total: ${formatDollars(totalPrice)}`}
        </Text>
      </View>
      <View style={styles.view}>
        <Button
          disabled={isEmpty}
          onPress={onPurchaseProducts}
          title="Place Order"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  items: { marginTop: 32, flexDirection: 'row' },
  image: { width: 30, height: 30 },
  view: { marginTop: 32 },
});

export default CheckoutList;
