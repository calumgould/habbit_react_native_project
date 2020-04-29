import React, {Component} from 'react';
import WelcomeMessage from '../components/WelcomeMessageComponent.js'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import buttonStyles from '../styles/button'
import MenuComponent from '../components/MenuComponent';


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
         }
    }

    ifHasPet() {
        if(this.state.hasPet) {
            return (
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Pet')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            )
            
        } else {
            return (
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => this.props.navigation.navigate('About')}>
                    <Text style={styles.buttonText}>New Pet</Text>
                </TouchableOpacity>
            )
        }
    }

    render() { 
        return ( 
            <View style={styles.body}>
                <WelcomeMessage title='HABBIT.'/>
                {this.ifHasPet()}
            </View>
         );
    }
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'slategrey',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText
})


 
export default GameContainer;