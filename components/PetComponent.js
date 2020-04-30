import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'

import EggComponent from './EggComponent'
import EggWithEarsComponent from './EggWithEarsComponent'
import SmallPetComponent from './SmallPetComponent'
import MiddlePetComponent from './MiddlePetComponent'
import BigPetComponent from './BigPetComponent'

const PetComponent = (props) => {

    const growthStage1 = 0
    const growthStage2 = 10000
    const growthStage3 = 30000
    const growthStage4 = 50000
    const growthStage5 = 100000

    const calculateProgress = (newGrowthSteps, growthStage) => {
        return newGrowthSteps / growthStage;
    }

    const resetGrowthStage = (previousGrowthStages) => {
        const progressSteps = props.growthSteps - previousGrowthStages
        return progressSteps
    }

    const showProgressBar = (progressSteps, growthStage) => {
        return (
            <Progress.Bar 
            progress={calculateProgress(progressSteps, growthStage)}
            animated={true}
            width={150}
            height={10}
            color='sienna'
            borderWidth={4}
            borderColor='black'
            />
        )
    }
    
    const currentPet = () => {
        if((props.totalSteps - growthStage4) >= growthStage5) {
            return <BigPetComponent />
        }
        else if((props.totalSteps - growthStage3) >= growthStage4) {
            const progressSteps = resetGrowthStage(growthStage2 + growthStage3 + growthStage4)
            return (
                <View style={styles.view}>
                <Text style={styles.text}>{progressSteps} / {growthStage5} </Text>
                    {showProgressBar(progressSteps, growthStage5)}
                    <MiddlePetComponent />
                </View>
            )
        }
        else if((props.totalSteps - growthStage2) >= growthStage3) {
            const progressSteps = resetGrowthStage(growthStage2 + growthStage3)
            return (
                <View style={styles.view}>
                <Text style={styles.text}>{progressSteps} / {growthStage4} </Text>
                    {showProgressBar(progressSteps, growthStage4)}
                    <SmallPetComponent />
                </View>
            )
        }
        else if((props.totalSteps - growthStage1) >= growthStage2) {
            const progressSteps = resetGrowthStage(growthStage2)
            return (
                <View style={styles.view}>
                    <Text style={styles.text}>{progressSteps} / {growthStage3} </Text>
                    {showProgressBar(progressSteps, growthStage3)}
                    <EggWithEarsComponent />
                </View>
            ) 
        }
        else if(props.totalSteps >= growthStage1){
            return (
                <View style={styles.view}>
                <Text style={styles.text}>{props.growthSteps} / {growthStage2} </Text>
                {showProgressBar(props.growthSteps, growthStage2)}
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
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        paddingBottom: 5,
    },
})

const progressBarSettings = {
    animated: true,
    width: 150,
    height: 10,
    color: 'sienna',
    borderWidth: 4,
    borderColor: 'black',
}
 
export default PetComponent;