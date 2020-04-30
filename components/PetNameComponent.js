import React from 'react'
import { Text, StyleSheet } from 'react-native'

const PetNameComponent = (props) => {
    return ( 
        <Text style={styles.text}>{props.petName}</Text>
     );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        marginBottom: 50,
        width: 300,
    }
})
 
export default PetNameComponent;