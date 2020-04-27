import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import AboutContainer from '../containers/AboutContainer'
import GameContainer from '../containers/GameContainer';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Game' >
                <Stack.Screen name='Game' component={GameContainer} />
                <Stack.Screen name='About' component={AboutContainer} />
            </Stack.Navigator>
        </NavigationContainer>
     );
}
 
export default AppNavigator;
