import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const EggWithEarsComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi_1_egg_cracked.png')} />
     );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    }
})
 
export default EggWithEarsComponent;