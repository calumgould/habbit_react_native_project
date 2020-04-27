import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const EggComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_egg.png')} />
     );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    }
})
 
export default EggComponent;