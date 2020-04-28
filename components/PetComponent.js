import React from 'react';
import {Text, View} from 'react-native'
import EggComponent from './EggComponent';
import EggWithEarsComponent from './EggWithEarsComponent';
import SmallPetComponent from './SmallPetComponent';
import MiddlePetComponent from './MiddlePetComponent';
import BigPetComponent from './BigPetComponent';


const PetComponent = (props) => {

    const currentPet = () => {
        if(props.totalSteps > 100000) {
            return <BigPetComponent />
        }
        else if(props.totalSteps > 50000) {
            return <MiddlePetComponent />
        }
        else if(props.totalSteps > 10000) {
            return <SmallPetComponent />
        }
        else if(props.totalSteps > 5000) {
            return <EggWithEarsComponent />
        }
        else if(props.totalSteps > props.growthGoal){
            return <EggComponent />
        }
    }

    return ( 
        <View>
            {currentPet()}
        </View>
     );
}
 
export default PetComponent;