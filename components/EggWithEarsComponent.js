import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';


const EggWithEarsComponent = (props) => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi1_egg_cracked.png')} resizeMode="contain"/>
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
 
export default EggWithEarsComponent;