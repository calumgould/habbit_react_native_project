import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import * as Progress from 'react-native-progress';

import BlinkingText from './BlinkingTextComponent';
import Database from '../Database.js';

const db = new Database();

class StepsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 0,
            dailySteps: 5000,
            stepGoal: 10000,
            enteredSteps: 0,
            growthSteps: 0
         }
         this.calculateProgress = this.calculateProgress.bind(this)
         this.enterSteps = this.enterSteps.bind(this)
         this.updateSteps = this.updateSteps.bind(this)
         this.updateUserSteps = this.updateUserSteps.bind(this)
        //  this.updateUser = this.updateUser.bind(this)
    }

    // updateUser(){
    //     // if(this.props.totalSteps === null) return;
    //     console.log('TOTALSTEPSTOTALSTEPS', this.props.totalSteps)
    //     console.log('DAILYSTEPSDAILYSTEPS', this.props.dailySteps)
    //     return new Promise((resolve, reject) => {
    //     if(this.props.totalSteps !== null) {    
    //     this.setState({
    //         totalSteps: parseInt(this.props.totalSteps),
    //         dailySteps: parseInt(this.props.dailySteps)
    //     })
    //         resolve(this.setState()); 
    //     } else {
    //         const errorObject = {
    //          msg: 'An error occured',
    //    }
    //    reject(errorObject);
    //     }
    //     });
    // }

    // componentDidMount(){
    //     this.updateUser()
    // }

    // componentDidUpdate(prevProps){
    //     if(this.props.user !== prevProps.user){
    //         this.updateUser();
    //     }
    // }

    

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

    updateUserSteps() {
        const user = {
            totalSteps: this.state.totalSteps,
            dailySteps: this.state.dailySteps
        }
        db.updateUser(this.props.user.userId, user)
        console.log("USERIDIDIDIDID", this.props.user.userId)
        this.sendSteps()
    }
    
    updateSteps() {
        this.setState({
            totalSteps: this.state.totalSteps + parseInt(this.state.enteredSteps),
            dailySteps: this.state.dailySteps + parseInt(this.state.enteredSteps),
            growthSteps: this.state.growthSteps + parseInt(this.state.enteredSteps),
            enteredSteps: ''
        }, this.updateUserSteps)
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