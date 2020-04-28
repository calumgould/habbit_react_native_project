import React from 'react';
import {StatusBar} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AboutContainer from '../containers/AboutContainer';
import GameContainer from '../containers/GameContainer';
import CreateContainer from '../containers/CreateContainer'
import PetContainer from '../containers/PetContainer'

const Stack = createStackNavigator();

const AppNavigator = () => {
    const [petName, setPetName] = React.useState(undefined);

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
                    component={CreateContainer} 
                    options={headerStyles}
                    initialParams={{setPetName}}
                />
                <Stack.Screen 
                    name='Pet' 
                    component={PetContainer} 
                    options={headerStyles}
                    initialParams={{petName}}
                />
            </Stack.Navigator>
        </NavigationContainer>
     );
}

const headerStyles = {
    headerStyle: {
        backgroundColor: 'darkslategrey',
        height: 0
    },
    headerTitleStyle: {
        color: 'ghostwhite',
    }
}
 
export default AppNavigator;
