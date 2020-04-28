import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import EggComponent from './EggComponent';
import EggWithEarsComponent from './EggWithEarsComponent';
import SmallPetComponent from './SmallPetComponent';
import MiddlePetComponent from './MiddlePetComponent';
import BigPetComponent from './BigPetComponent';
import * as Progress from 'react-native-progress';


const PetComponent = (props) => {

    const growthStage1 = 0
    const growthStage2 = 5000
    const growthStage3 = 10000
    const growthStage4 = 50000
    const growthStage5 = 100000

    const calculateProgress = (growthStage) => {
        return props.totalSteps / growthStage;
    }

    const currentPet = () => {
        if(props.totalSteps >= growthStage5) {
            return <BigPetComponent />
        }
        else if(props.totalSteps >= growthStage4) {
            return (
                <View style={styles.view}>
                    <Progress.Bar 
                    progress={calculateProgress(growthStage5)}
                    animated={true}
                    width={50}
                    height={25}
                    color='crimson'
                    borderWidth={4}
                    borderColor='black'
                    />
                    <MiddlePetComponent />
                </View>
            )
        }
        else if(props.totalSteps >= growthStage3) {
            return (
                <View style={styles.view}>
                    <Progress.Bar 
                    progress={calculateProgress(growthStage4)}
                    animated={true}
                    width={50}
                    height={25}
                    color='crimson'
                    borderWidth={4}
                    borderColor='black'
                    />
                    <SmallPetComponent />
                </View>
            )
        }
        else if(props.totalSteps >= growthStage2) {
            return (
                <View style={styles.view}>
                    <EggWithEarsComponent />
                    <Progress.Bar 
                    progress={calculateProgress(growthStage3)}
                    animated={true}
                    width={70}
                    height={10}
                    color='crimson'
                    borderWidth={4}
                    borderColor='black'
                    />
                </View>
            ) 
        }
        else if(props.totalSteps >= growthStage1){
            return (
                <View style={styles.view}>
                    <Progress.Bar 
                    progress={calculateProgress(growthStage2)}
                    animated={true}
                    width={50}
                    height={25}
                    color='crimson'
                    borderWidth={4}
                    borderColor='black'
                    />
                    <EggComponent />
                </View>
            ) 
        }
    }

    return ( 
        <View>
            {currentPet()}
        </View>
     );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    }
})
 
export default PetComponent;