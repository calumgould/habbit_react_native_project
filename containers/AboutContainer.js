import React, {Component} from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import buttonStyles from '../styles/button';
import AboutComponent from '../components/AboutComponent';

const AboutContainer = (props) => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
            <AboutComponent />  
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => props.navigation.navigate('Create')}>
                <Text style={styles.buttonText}>Create New Pet</Text>
            </TouchableOpacity>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'slategrey',
      flex: 1,
    },
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
   
})
 
export default AboutContainer;