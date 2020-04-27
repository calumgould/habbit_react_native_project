import React, {Component} from 'react';
import {Text, View} from 'react-native';
import StepsComponent from '../components/StepsComponent.js';
import EggComponent from '../components/EggComponent';
import EggWithEarsComponent from '../components/EggWithEarsComponent';
import SmallPetComponent from '../components/SmallPetComponent';
import MiddlePetComponent from '../components/MiddlePetComponent';
import BigPetComponent from '../components/BigPetComponent';


class PetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 4000
        }
        this.currentPet = this.currentPet.bind(this)
    }

    currentPet(props){
        console.log('props', this.props.totalSteps);

        if(this.state.totalSteps < 6000) {
            return <EggWithEarsComponent />
        }
    }

    render() { 
        return ( 
            <View>
                {this.currentPet()}
                <StepsComponent />
            </View>
         );
    }
}
 
export default PetContainer;