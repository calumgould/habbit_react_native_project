import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import buttonStyles from '../styles/button'

import EggComponent from './EggComponent'

const RegisterPetComponent = (props) => {

    const [text, setText] = useState('');

    const setName = (value) => {
        setText(value)
    }

        return ( 
            <View style={styles.body}>
                <TextInput 
                    style={styles.text} 
                    placeholder="My new name" 
                    placeholderTextColor='ghostwhite' 
                    onChangeText={text => setName(text)} 
                    defaultValue={text}>
                </TextInput>
                <EggComponent />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => props.navigation.navigate('Pet')}>
                    <Text style={styles.buttonText}>Enter name</Text>
                </TouchableOpacity>
            </View>
         );
    }

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'slategrey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        height: 30,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular'
    },
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText
    
})
 
export default RegisterPetComponent;
