import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppearanceProvider } from 'react-native-appearance';

import AboutScreen from './screens/AboutScreen';
import GameScreen from './screens/GameScreen';
import CreateScreen from './screens/CreateScreen';
import PetScreen from './screens/PetScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const [petName, setPetName] = React.useState(undefined);

    return (
        <AppearanceProvider>
            <NavigationContainer theme={habbitTheme}>
                <StatusBar barStyle={'light-content'}/>
                <Drawer.Navigator drawerStyle={{width: 200}}>
                    <Drawer.Screen name='Menu'>
                    {() => ( 
                        <Stack.Navigator initialRouteName='Game' >
                            <Stack.Screen 
                                name='Game' 
                                component={GameScreen} 
                                options={headerStyles}
                            />
                            <Stack.Screen 
                                name='About' 
                                component={AboutScreen} 
                                options={headerStyles}
                            />
                            <Stack.Screen 
                                name='Create' 
                                component={CreateScreen} 
                                options={headerStyles}
                                initialParams={{setPetName}}
                            />
                            <Stack.Screen 
                                name='Pet' 
                                component={PetScreen} 
                                options={headerStyles}
                                initialParams={{petName}}
                            />
                        </Stack.Navigator>
                    )}
                    </Drawer.Screen>
                    <Drawer.Screen 
                        name='Information' 
                        component={InfoScreen} 
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </AppearanceProvider>
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

const habbitTheme = {
    dark: false,
    colors: {
        primary: 'white',
        background: 'slategrey',
        card: 'slategrey',
        text: 'ghostwhite',
        border: 'black'
    },
}

export default AppNavigator;
