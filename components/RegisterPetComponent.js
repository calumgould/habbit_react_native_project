import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

import buttonStyles from '../styles/Button';
import mainStyles from '../styles/MainStyles'
import BlinkingText from './BlinkingTextComponent';

import Database from '../Database';

const db = new Database();

const RegisterPetComponent = (props) => {

    const [text, setText] = useState('');
    const {setPetName} = props;

    const setName = (value) => {
        setText(value)
        setPetName(value);
    }

        return ( 
            <View style={[styles.body, {flex: 0}]}>
                <View style={styles.inputField}>
                    <TextInput 
                        style={[styles.text, {fontSize: 25}]} 
                        placeholder="Name me..." 
                        placeholderTextColor='ghostwhite' 
                        onChangeText={text => setName(text)} 
                        defaultValue={text}>
                    </TextInput>
                    <Text style={[styles.text, {fontSize: 25}]}>
                        <BlinkingText text="|" />
                    </Text>
                </View>
                <View>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/images/boi1_egg.png')}
                        resizeMode='contain'
                    />
                </View>
            </View>
         );
    }

const styles = StyleSheet.create({
    inputField: {
        flexDirection: 'row',
    },
    body: mainStyles.body,
    text: mainStyles.text,
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
    image: mainStyles.image,
    
})
 
export default RegisterPetComponent;
