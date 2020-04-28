import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SmallPetComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_small.png')} resizeMode="contain"/>
     );
}

const styles = StyleSheet.create({
    image: {
        height: 175,
        width: 175,
        marginTop: 20,
        marginBottom: 60,
    }
})
 
export default SmallPetComponent;