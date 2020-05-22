import React from 'react'
import { Text, StyleSheet } from 'react-native'

import mainStyles from '../styles/MainStyles'

const PetNameComponent = (props) => {
    return ( 
        <Text style={[styles.text, {fontSize: 30, marginBottom: 50, width: 500}]}>{props.petName}</Text>
     );
}

const styles = StyleSheet.create({
    text: mainStyles.text,
})
 
export default PetNameComponent;