import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import GameContainer from './containers/GameContainer'
import AboutContainer from './containers/AboutContainer'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.body}>
        <GameContainer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'slategrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default App;
