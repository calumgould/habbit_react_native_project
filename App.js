import React from 'react'
import { StyleSheet } from 'react-native'

import AppNavigator from './components/AppNavigator'

console.disableYellowBox = true;


const App = () => {
  return (
      <AppNavigator />
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'slategrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
