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
    const growthStage2 = 10000
    const growthStage3 = 30000
    const growthStage4 = 50000
    const growthStage5 = 100000

    const calculateProgress = (growthStage) => {
        return props.totalSteps / growthStage;
    }

    const calculateProgress2 = (lastGrowthStage, growthStage) => {
        return (props.totalSteps - lastGrowthStage ) / growthStage;
    }

    const currentPet = () => {
        if(props.totalSteps >= growthStage5) {
            return <BigPetComponent />
        }
        else if(props.totalSteps >= growthStage4) {
            return (
                <View style={styles.view}>
                    <Progress.Bar 
                    progress={calculateProgress2(growthStage4, growthStage5)}
                    animated={true}
                    width={150}
                    height={10}
                    color='green'
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
                    progress={calculateProgress2(growthStage3, growthStage4)}
                    animated={true}
                    width={150}
                    height={10}
                    color='green'
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
                    <Progress.Bar 
                    progress={calculateProgress2(growthStage2, growthStage3)}
                    animated={true}
                    width={150}
                    height={10}
                    color='green'
                    borderWidth={4}
                    borderColor='black'
                    />
                    <EggWithEarsComponent />
                </View>
            ) 
        }
        else if(props.totalSteps >= growthStage1){
            return (
                <View style={styles.view}>
                    <Progress.Bar 
                    progress={calculateProgress(growthStage2)}
                    animated={true}
                    width={150}
                    height={10}
                    color='green'
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