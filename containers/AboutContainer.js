import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native'

import buttonStyles from '../styles/Button'
import AboutComponent from '../components/AboutComponent'

import mainStyles from '../styles/MainStyles'

const AboutContainer = (props) => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <AboutComponent />  
            <TouchableOpacity 
                style={[styles.button, {marginVertical: 60}]} 
                onPress={() => props.navigation.navigate('Create')}>
                <Text style={styles.buttonText}>
                    Create New Pet
                </Text>
            </TouchableOpacity>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    scroll: {
      backgroundColor: 'slategrey',
      flex: 1,
    },
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
   
})
 
export default AboutContainer;