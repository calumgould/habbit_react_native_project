/* eslint-disable prettier/prettier */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.body}>
        <Text style={styles.whiteText}>Habbit.</Text>
        <Image style={styles.image} source={require('./assets/images/boi1_small.png')} />
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
  whiteText: {
    color: 'ghostwhite',
    fontSize: 36,
    fontFamily: 'ArcadeClassic',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default App;
