import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import GameContainer from './containers/GameContainer'
import AboutContainer from './containers/AboutContainer'
import RegisterPetComponent from './components/RegisterPetComponent'
// import AppNavigator from './components/AppNavigator'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator();

const App = () => {
  return (
    // <View style={styles.body}>
    // <StatusBar barStyle={'light-content'} />
    // {/* <GameContainer /> */}
    <NavigationContainer>
            <Stack.Navigator initialRouteName='Game' >
                <Stack.Screen name='Game' component={GameContainer} />
                <Stack.Screen name='About' component={AboutContainer} />
                <Stack.Screen name='Create' component={RegisterPetComponent} />
            </Stack.Navigator>
      </NavigationContainer>
    // {/* <RegisterPetComponent /> */}
    // </View>
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
