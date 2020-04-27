import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return ( 
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 25,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
    },
    buttonText: {
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        fontSize: 12,
    }
})

export default Button;