import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import StepsComponent from '../components/StepsComponent.js';
import EggComponent from '../components/EggComponent';
import EggWithEarsComponent from '../components/EggWithEarsComponent';
import SmallPetComponent from '../components/SmallPetComponent';
import MiddlePetComponent from '../components/MiddlePetComponent';
import BigPetComponent from '../components/BigPetComponent';
import ProgressPieComponent from '../components/ProgressPieComponent';


class PetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 0
        }
        this.currentPet = this.currentPet.bind(this)
        this.handleSteps = this.handleSteps.bind(this)
    }

    currentPet(){
        if(this.state.totalSteps > 100000) {
            return <BigPetComponent />
        }
        else if(this.state.totalSteps > 50000) {
            return <MiddlePetComponent />
        }
        else if(this.state.totalSteps > 10000) {
            return <SmallPetComponent />
        }
        else if(this.state.totalSteps > 5000) {
            return <EggWithEarsComponent />
        }
        else return <EggComponent totalSteps={this.state.totalSteps}/>
    }

    // calculateGrowthProgress(){
    //     const pet = this.currentPet()
    //     return pet
    // }

    handleSteps(totalSteps){
        this.setState({
            totalSteps: totalSteps
        })
        
    }

    render() { 
        return ( 
            <View style={styles.body}>
                {this.currentPet()}
                <StepsComponent getSteps={(totalSteps) => this.handleSteps(totalSteps)} /> 
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
    }
})
 
export default PetContainer;