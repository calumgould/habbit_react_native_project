import React, {useState} from 'react'
import RegisterPetComponent from '../components/RegisterPetComponent'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import buttonStyles from '../styles/Button'

import Database from '../Database'

import mainStyles from '../styles/MainStyles';

const db = new Database();

const CreateContainer = (props) => {
    const {route} = props;
    const {setPetName} = route.params;

    // const [user, setUser] = useState([]);

    setPetName('Boi');

    return ( 
        <View style={styles.body}>
        <RegisterPetComponent setPetName={setPetName} />
        <TouchableOpacity 
            style={[styles.button]} 
            onPress={() => props.navigation.navigate('Pet')}>
            <Text style={styles.buttonText}>
                Save pet
            </Text>
        </TouchableOpacity>
    </View>
     );
}

const styles = StyleSheet.create({
    body: mainStyles.body,
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
})
 
export default CreateContainer;