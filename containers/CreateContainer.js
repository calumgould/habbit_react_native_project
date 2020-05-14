import React, {useState} from 'react'
import RegisterPetComponent from '../components/RegisterPetComponent'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import buttonStyles from '../styles/button'

import Database from '../Database'

const db = new Database();

const CreateContainer = (props) => {
    const {route} = props;
    const {setPetName} = route.params;

    // const [user, setUser] = useState([]);

    setPetName('Boi');

    const saveUser = () => {
        const user = {
            userId: '1',
            petName: 'Roosa',
            petAge: '5',
            dateCreated: 'May 5 2020',
            totalSteps: '5000',
            dailySteps: '1000',
        }
        db.addUser(user)
        .then((result) => {
            console.log('result', result);
        })
        .catch((err) => {
            console.log('error', err);
        })
    }

    // const saveUser = () => {
    //     setUser([
    //         '',
    //         'roosa',
    //         '0',
    //         'May 14 2020',
    //         '0',
    //         '0',
    //     ])
    //     .then(() => {
    //         db.addUser(user)
    //     })

    //     .then((result) => {
    //         console.log('result', result);
    //     })
    //     console.log('user', user);
    //     props.navigation.navigate('Pet')
    // }

    return ( 
        <View style={styles.body}>
        <RegisterPetComponent setPetName={setPetName} />
        <TouchableOpacity 
            style={[styles.button, {marginTop:70}]} 
            onPress={saveUser}>
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