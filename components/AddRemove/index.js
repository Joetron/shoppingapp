import * as React from 'react';
import { Text, Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const AddRemove = ({ item }) => {
  const { count } = item;
  return (
    <View style={styles.controls}>
      <Icon name={count === 1 ? 'trash' : 'remove'} />
      <View style={styles.quantityWrapper}>
        <Text style={styles.quantity}>{count}</Text>
      </View>
      <Icon name="add" />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityWrapper: {
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  quantity: {
    fontSize: 20,
    lineHeight: 20,
    margin: 5,
  },
});

export default AddRemove;
