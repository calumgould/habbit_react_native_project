import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import StepsComponent from '../components/StepsComponent.js'
import PetComponent from '../components/PetComponent'
import PetNameComponent from '../components/PetNameComponent'
import MenuComponent from '../components/MenuComponent'
import User from '../components/UserComponent';



class PetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            petName: props.route.params.petName,
            totalSteps: 0,
            growthSteps: 0,
            user: {}
        }
        this.handleSteps = this.handleSteps.bind(this)
        this.handleNewUser = this.handleNewUser.bind(this)
 
    }

    handleNewUser(){
        this.setState({
            user: {
                userId: '1',
                petName: this.state.petName,
                petAge: '0',
                dateCreated: 'date now',
                totalSteps: '0',
                dailySteps: '0',
            }
        })
    }

    componentDidMount(){

        this.handleNewUser();
        //Save all data to user

        // Name of pet

        // Current time

        //Steps from last login

        //total steps

        // user{}

        // saveuser(user)
    }

    handleSteps(totalSteps, growthSteps){
        this.setState({
            totalSteps: totalSteps,
            growthSteps: growthSteps
        }) 
    }

    render() { 
        return ( 
            <View style={styles.body}>
                <MenuComponent navigation={this.props.navigation}/>
                <PetNameComponent petName={this.state.petName} />
                <PetComponent totalSteps={this.state.totalSteps} growthSteps={this.state.growthSteps}/>
                <StepsComponent getSteps={(totalSteps, growthSteps) => this.handleSteps(totalSteps, growthSteps)} />
                <User user={this.state.user} />
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
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular'
    },
    rotateText: {
        textAlign: 'center',
        fontSize: 10,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        top: 30,
        transform: [{
            rotate: '40deg'
        }]
    },
})
 
export default PetContainer;