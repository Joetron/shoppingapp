import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const AppScreen = ({ children, title }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>{title}</Text>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    height: '100%',
    marginTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 8,
    marginTop: 8,
  },
});

export default AppScreen;
