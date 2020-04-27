import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

import EggComponent from './EggComponent'

const RegisterPetComponent = () => {

    const [text, setText] = useState('');

    const setName = (value) => {
        setText(value)
    }

        return ( 
            <View>
                <TextInput style={styles.text} placeholder="My new name" onChangeText={text => setName(text)} defaultValue={text}></TextInput>
                <EggComponent />
                {/* <ButtonComponent title='Save Pet' /> */}
            </View>
         );
    }

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 25,
        height: 40,
        color: 'ghostwhite'
    }
})
 
export default RegisterPetComponent;
