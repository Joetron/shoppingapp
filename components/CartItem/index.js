import * as React from 'react';
import { ListItem, Text, Image } from 'react-native-elements';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import AddRemove from '../AddRemove';
import { formatDollars } from '../../utils';

const CartItem = ({ item }) => {
  const {
    name,
    description,
    src,
    price,
    count,
    onAddToCart,
    onRemoveFromCart,
  } = item;
  return (
    <ListItem Component={TouchableHighlight} pad={20}>
      <View style={styles.imageWrapper}>
        <Image source={src} style={styles.image} />
      </View>
      <ListItem.Content>
        <ListItem.Title>
          <Text>{name}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>{description}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <AddRemove
        count={count}
        item={item}
        onAdd={() => onAddToCart(item.id)}
        onRemove={() => onRemoveFromCart(item.id)}
      />
      <Text>{formatDollars(count * price)}</Text>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  imageWrapper: { alignItems: 'center', justifyContent: 'center' },
  image: { width: 50, height: 50 },
});

export default CartItem;
