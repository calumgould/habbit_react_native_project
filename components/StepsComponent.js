import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import * as Progress from 'react-native-progress';

import BlinkingText from './BlinkingTextComponent';

class StepsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 0,
            dailySteps: 0,
            stepGoal: 10000,
            enteredSteps: 0,
            growthSteps: 0
         }
         this.calculateProgress = this.calculateProgress.bind(this)
         this.enterSteps = this.enterSteps.bind(this)
         this.updateSteps = this.updateSteps.bind(this)
    }

    calculateProgress(){
        return this.state.dailySteps / this.state.stepGoal
    }

    enterSteps(steps){
        this.setState({
            enteredSteps: steps
        })
        
    }

    resetGrowthSteps(){
        this.setState({
            growthSteps: 0
        })
    }

    sendSteps(){
        this.props.getSteps(this.state.totalSteps, this.state.growthSteps)
    }
    
    updateSteps() {
        this.setState({
            totalSteps: this.state.totalSteps + parseInt(this.state.enteredSteps),
            dailySteps: this.state.dailySteps + parseInt(this.state.enteredSteps),
            growthSteps: this.state.growthSteps + parseInt(this.state.enteredSteps),
            enteredSteps: ''
        }, this.sendSteps)
    }
        
      render() { 
        return ( 
            <>
                <StyledText size='16px'>
                    Manual Step Input:
                </StyledText>

                <BlinkingWrapper
                backgroundColor='darkslategrey'
                border='2px solid black'>
                    <StyledTextInput size='14px'
                        placeholder="Enter steps" 
                        placeholderTextColor='grey'
                        value={this.state.enteredSteps}
                        keyboardType='numeric'
                        onChangeText={value => this.enterSteps(value)}
                        returnKeyLabel='Done'
                        returnKeyType='done'
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <BlinkingText text="|" color='grey' size='18px' />
                </BlinkingWrapper>

                <ButtonContainer 
                    onPress={this.updateSteps}
                    marginTop='10px'
                    marginBottom='25%'>
                    <ButtonText>
                        Submit
                    </ButtonText>
                </ButtonContainer>

                <StyledText size='20px'>
                    Daily Steps
                    {'\n'}
                    {this.state.dailySteps} / {this.state.stepGoal}
                </StyledText>
                
                <Progress.Bar 
                    progress={this.calculateProgress()} 
                    animated={true}
                    width={320}
                    height={25}
                    color='darkslategrey'
                    borderWidth={4}
                    borderColor='black'
                    style={{marginTop: 20}}
                />
            </>
         );
    }
}
 
export default StepsComponent;