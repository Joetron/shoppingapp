import * as React from 'react';
import { ListItem, Text, Icon } from 'react-native-elements';
import { TouchableHighlight, StyleSheet } from 'react-native';
import AddRemove from '../AddRemove';

const Product = ({ item }) => {
  const {
    id,
    name,
    description,
    icon,
    price,
    count,
    onAddToCart,
    onRemoveFromCart,
  } = item;
  return (
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={styles.disabledStyle}
      onLongPress={() => console.log('onLongPress()')}
      onPress={() => console.log('onLongPress()')}
      pad={20}>
      <Icon name={icon} />
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
        onAdd={() => onAddToCart(item)}
        onRemove={() => onRemoveFromCart(item)}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  disabledStyle: { opacity: 0.5 },
});

export default Product;
