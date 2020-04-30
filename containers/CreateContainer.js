import React from 'react'
import RegisterPetComponent from '../components/RegisterPetComponent'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import buttonStyles from '../styles/button'

const CreateContainer = (props) => {
    const {route} = props;
    const {setPetName} = route.params;

    setPetName('Boi');

    return ( 
        <View style={styles.body}>
        <RegisterPetComponent setPetName={setPetName} />
        <TouchableOpacity 
            style={[styles.button, {marginTop:70}]} 
            onPress={() => props.navigation.navigate('Pet')}>
            <Text style={styles.buttonText}>
                Save pet
            </Text>
        </TouchableOpacity>
    </View>
     );
}

const styles = StyleSheet.create({
    inputField: {
        flexDirection: 'row',
    },
    body: {
        backgroundColor: 'slategrey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        height: 30,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular'
    },
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
    image: {
        height: 300,
        width: 300,
    }
    
})
 
export default CreateContainer;