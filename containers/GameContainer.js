import React, {Component} from 'react'
import WelcomeMessage from '../components/WelcomeMessageComponent.js'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import buttonStyles from '../styles/button'

import Database from '../Database.js';

const db = new Database();

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
            isLoading: true,
            users: [],
            notFound: 'Pet not found'
         }
    }

    componentDidMount() {
        console.log('mount');
            this.getUsers()
    }

    getUsers() {
        console.log('hello from getUsers');
        let users = []
        db.listDetails()
        .then((data) => {
            users = data
            this.setState({
                users: users,
                isLoading: false,
            });
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        })
        console.log(this.state.users);
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
                    <Text style={styles.buttonText}>Create New Pet</Text>
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