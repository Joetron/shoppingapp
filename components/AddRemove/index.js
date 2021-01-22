import * as React from 'react';
import { Text, Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const AddRemove = ({ count, onAdd, onRemove }) => {
  return (
    <View style={styles.controls}>
      {count > 0 && (
        <Icon name={count === 1 ? 'delete' : 'remove'} onPress={onRemove} />
      )}
      {count > 0 && (
        <View style={styles.quantityWrapper}>
          <Text style={styles.quantity}>{count}</Text>
        </View>
      )}
      <Icon name="add" onPress={onAdd} />
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
