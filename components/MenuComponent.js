import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';

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

const styles = StyleSheet.create({
    nav: {
        marginTop: 20,
        height: 30,
        position: 'absolute',
        right: -110,
        top: 40,
    }
})
 
export default MenuComponent;