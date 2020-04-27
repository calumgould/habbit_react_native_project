import React, {Component} from 'react';
import WelcomeMessage from '../components/WelcomeMessageComponent.js'
import {View, Text} from 'react-native';
import Button from '../styles/button';


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
         }
    }

    ifHasPet() {
        if(this.state.hasPet) {
            return <Button title='Continue'/>
        } else {
            return <Button title='Create New Pet'/>
        }
    }

    render() { 
        return ( 
            <>
            <WelcomeMessage title='HABBIT.'/>
            {this.ifHasPet()}
            </>
         );
    }
}


 
export default GameContainer;