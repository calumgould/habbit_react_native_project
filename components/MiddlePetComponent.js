import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const MiddlePetComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_medium.png')} />
     );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        marginTop: 20,
        marginBottom: 60,
    }
})
 
export default MiddlePetComponent;