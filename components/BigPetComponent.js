import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const BigPetComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_big.png')} resizeMode="contain"/>
     );
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 250,
        marginTop: 20,
        marginBottom: 60,
    }
})
 
export default BigPetComponent;