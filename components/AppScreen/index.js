import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const AppScreen = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{children}</SafeAreaView>
    </>
  );
};

export default AppScreen;
