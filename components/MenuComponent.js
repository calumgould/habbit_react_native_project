import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import styles from '../styles/styles';

const MenuComponent = ({navigation}) => {

    return ( 
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/images/hamburger.png')}
                style={styles.nav} 
                resizeMode="contain">
            </Image>
        </TouchableWithoutFeedback>
     );
}
 
export default MenuComponent;