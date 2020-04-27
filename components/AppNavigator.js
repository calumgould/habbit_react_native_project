import React from 'react';
import {StatusBar} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AboutContainer from '../containers/AboutContainer';
import GameContainer from '../containers/GameContainer';
import RegisterPetComponent from './RegisterPetComponent';
import PetContainer from '../containers/PetContainer'

const Stack = createStackNavigator();

const AppNavigator = () => {
    return ( 
        <NavigationContainer>
        <StatusBar barStyle={'light-content'}/>
            <Stack.Navigator initialRouteName='Game' >
                <Stack.Screen 
                    name='Game' 
                    component={GameContainer} 
                    options={headerStyles}
                />
                <Stack.Screen 
                    name='About' 
                    component={AboutContainer} 
                    options={headerStyles}
                />
                <Stack.Screen 
                    name='Create' 
                    component={RegisterPetComponent} 
                    options={headerStyles}
                />
                <Stack.Screen 
                    name='Pet' 
                    component={PetContainer} 
                    options={headerStyles}
                />
            </Stack.Navigator>
        </NavigationContainer>
     );
}

const headerStyles = {
    headerStyle: {
        backgroundColor: 'darkslategrey'
    },
    headerTitleStyle: {
        color: 'ghostwhite',
    }
}
 
export default AppNavigator;
