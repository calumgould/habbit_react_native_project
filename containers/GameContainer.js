import React, {Component} from 'react'
import WelcomeMessage from '../components/WelcomeMessageComponent.js'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import buttonStyles from '../styles/Button';
import mainStyles from '../styles/MainStyles';

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
         this.checkUserExists = this.checkUserExists.bind(this)
         this.ifHasPet = this.ifHasPet.bind(this)
         
    }

    componentDidMount() {
        console.log('mount');
        db.deleteAllUsers()
        this.getUsers()
    }

    getUsers() {
        console.log('hello from getUsers');
        db.listDetails()
        .then((data) => {
            console.log('DATADATA', data)
            this.setState({
                users: data,
                isLoading: false,
            }, this.checkUserExists)
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        }, this.checkUserExists)
        console.log('users', this.state.users)
    }

    checkUserExists() {
        if(this.state.users.length > 0){
            this.setState({
                hasPet: true
            })
        }
        console.log('USERSUSERS', this.state.users)
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
    body: mainStyles.body,
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText
})
 
export default GameContainer;