import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'

import buttonStyles from '../styles/button'
import BlinkingText from './BlinkingTextComponent'

const RegisterPetComponent = (props) => {

    const [text, setText] = useState('');
    const {setPetName} = props;

    const setName = (value) => {
        setText(value)
        setPetName(value);
    }

        return ( 
            <View style={styles.body}>
                <View style={styles.inputField}>
                    <TextInput 
                        style={styles.text} 
                        placeholder="Name me..." 
                        placeholderTextColor='ghostwhite' 
                        onChangeText={text => setName(text)} 
                        defaultValue={text}>
                    </TextInput>
                    <Text style={styles.text}>
                        <BlinkingText text="|" />
                    </Text>
                </View>
                <View>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/images/boi1_egg.png')} 
                    />
                </View>
            </View>
         );
    }

const styles = StyleSheet.create({
    inputField: {
        flexDirection: 'row',
    },
    body: {
        backgroundColor: 'slategrey',
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
        height: 200,
        width: 200,
        marginTop: 50,
    },
    
})
 
export default RegisterPetComponent;
