import React, { Component } from 'react';
import {Image, StyleSheet, View, Text, Animated, Easing, TouchableWithoutFeedback, useRef} from 'react-native';

const BigPetComponent = () => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_big.png')} />
     );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    }
})
 
export default BigPetComponent;