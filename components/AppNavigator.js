import React from 'react';
import {StatusBar, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createDrawerNavigator, contentOptions} from '@react-navigation/drawer';
import AboutContainer from '../containers/AboutContainer';
import GameContainer from '../containers/GameContainer';
import CreateContainer from '../containers/CreateContainer';
import PetContainer from '../containers/PetContainer';
import InfoContainer from '../containers/InfoContainer';
import MenuComponent from './MenuComponent';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const [petName, setPetName] = React.useState(undefined);

    return ( 
        <NavigationContainer>
        <StatusBar barStyle={'light-content'}/>
        <Drawer.Navigator
        drawerStyle={{
            backgroundColor: 'slategrey',
            width: 200,
            contentOptions : {
                labelStyle: {
                    fontFamily: 'PressStart2P-Regular',
                    color: 'ghostwhite',
                }
            }
        }}>
            <Drawer.Screen name='Menu'>
            {() => ( 
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
            )}
            </Drawer.Screen>
            <Drawer.Screen 
                name='Information' 
                component={InfoContainer} 
            />
        </Drawer.Navigator>
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

const styles = StyleSheet.create({
    nav: {
        marginTop: 100,
    }
})

const habbitTheme = {
    dark: false,
    colors: {
        primary: 'sienna',
        background: 'slategrey',
        card: 'yellow',
        text: 'ghostwhite',
        border: 'black'
    },
}

    
export default AppNavigator;
