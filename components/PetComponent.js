import React from 'react';
import * as Progress from 'react-native-progress';

import EggComponent from './EggComponent';
import EggWithEarsComponent from './EggWithEarsComponent';
import SmallPetComponent from './SmallPetComponent';
import MiddlePetComponent from './MiddlePetComponent';
import BigPetComponent from './BigPetComponent';

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
            color='#b32d00'
            borderWidth={4}
            borderColor='black'
            />
        )
    }
    
    const currentPet = () => {
        if((props.totalSteps - (growthStage2 + growthStage3 + growthStage4) >= growthStage5)) {
            return <BigPetComponent />
        }
        else if((props.totalSteps - (growthStage2 + growthStage3)) >= growthStage4) {
            const progressSteps = resetGrowthStage(growthStage2 + growthStage3 + growthStage4)
            return (
                <>
                    <StyledText size='14px'>{progressSteps} / {growthStage5}</StyledText>
                    {showProgressBar(progressSteps, growthStage5)}
                    <MiddlePetComponent />
                </>
            )
        }
        else if((props.totalSteps - growthStage2) >= growthStage3) {
            const progressSteps = resetGrowthStage(growthStage2 + growthStage3)
            return (
                <>
                    <StyledText size='14px'>{progressSteps} / {growthStage4}</StyledText>
                    {showProgressBar(progressSteps, growthStage4)}
                    <SmallPetComponent />
                </>
            )
        }
        else if((props.totalSteps - growthStage1) >= growthStage2) {
            const progressSteps = resetGrowthStage(growthStage2)
            return (
                <>
                    <StyledText size='14px'>{progressSteps} / {growthStage3}</StyledText>
                    {showProgressBar(progressSteps, growthStage3)}
                    <EggWithEarsComponent />
                </>
            ) 
        }
        else if(props.totalSteps >= growthStage1){
            return (
                <>
                    <StyledText size='14px'>{props.growthSteps} / {growthStage2}</StyledText>
                    {showProgressBar(props.growthSteps, growthStage2)}
                    <EggComponent />
                </>
            ) 
        }
    }

    return ( 
        <>
            {currentPet()}
        </>
     );
}
 
export default PetComponent;