import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';


const EggWithEarsComponent = (props) => {
    return ( 
        <Image style={styles.image} source={require('../assets/images/boi_1_egg_cracked.png')} />
     );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
        borderWidth: 5,
    }
})
 
export default EggWithEarsComponent;