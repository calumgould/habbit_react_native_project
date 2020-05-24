import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppearanceProvider } from 'react-native-appearance';

import AboutContainer from './containers/AboutContainer';
import GameContainer from './containers/GameContainer';
import CreateContainer from './containers/CreateContainer';
import PetContainer from './containers/PetContainer';
import InfoContainer from './containers/InfoContainer';

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
