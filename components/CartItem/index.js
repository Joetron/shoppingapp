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
    inventory,
    onAddToCart,
    onRemoveFromCart,
  } = item;

  let inventoryMessage;
  if (inventory === 0) {
    inventoryMessage = 'Out of stock';
  } else if (inventory < 10) {
    inventoryMessage = `Hurry! Only ${inventory} left!`;
  }

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
        {inventoryMessage && (
          <Text style={styles.inventory}>{inventoryMessage}</Text>
        )}
      </ListItem.Content>
      <AddRemove
        count={count}
        inventory={inventory}
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
  inventory: { marginTop: 4, fontStyle: 'italic' },
});

export default CartItem;
