import * as React from 'react';
import { ListItem, Text, Icon } from 'react-native-elements';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import AddRemove from '../AddRemove';

const Product = ({ item }) => {
  const { id, name, description, icon, price, count } = item;
  return (
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
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
      <AddRemove count={count} />
    </ListItem>
  );
};

// const styles = StyleSheet.create({
// });

export default Product;
