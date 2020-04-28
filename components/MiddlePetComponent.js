import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const MiddlePetComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_medium.png')} resizeMode="contain"/>
     );
}

const styles = StyleSheet.create({
    image: {
        height: 225,
        width: 225,
        marginTop: 20,
        marginBottom: 60,
    }
})
 
export default MiddlePetComponent;