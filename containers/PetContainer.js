import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import StepsComponent from '../components/StepsComponent.js'
import PetComponent from '../components/PetComponent'
import PetNameComponent from '../components/PetNameComponent'
import MenuComponent from '../components/MenuComponent'


class PetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            petName: props.route.params.petName,
            totalSteps: 0,
            growthSteps: 0
        }
        this.handleSteps = this.handleSteps.bind(this)
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