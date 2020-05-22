import React, { Component } from 'react'
import { View, Text, Keyboard } from 'react-native'
import * as Progress from 'react-native-progress'
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import buttonStyles from '../styles/Button'
import BlinkingText from './BlinkingTextComponent'

import mainStyles from '../styles/MainStyles'


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
            <View>
                <Text 
                    style={[styles.text, {marginBottom: 10, height: 30}]}>
                    Manual Step Input:
                </Text>

                <View style={[styles.body, {flex: 0}]}>
                    <View style={styles.inputField}>
                        <TextInput 
                            style={[styles.text, {paddingVertical: 10, fontSize: 14}]} 
                            placeholder="Enter steps" 
                            placeholderTextColor='grey'
                            value={this.state.enteredSteps}
                            keyboardType='numeric'
                            onChangeText={value => this.enterSteps(value)}
                            returnKeyLabel='Done'
                            returnKeyType='done'
                            onSubmitEditing={Keyboard.dismiss}
                        />
                        <Text style={[styles.text, {color: 'grey', paddingVertical: 10, fontSize: 14, marginTop: 2}]}>
                            <BlinkingText text="|" />
                        </Text>
                    </View>
                </View>

                <TouchableOpacity 
                    style={[styles.button, {marginBottom: 80}]}
                    onPress={this.updateSteps}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <Text style={[styles.text, {paddingBottom: 10}]}>
                    Daily Steps
                </Text>

                <Text style={styles.text}>
                    {this.state.dailySteps} / {this.state.stepGoal}
                </Text>
                
                <Progress.Bar 
                    progress={this.calculateProgress()} 
                    animated={true}
                    width={null}
                    height={25}
                    color='darkslategrey'
                    borderWidth={4}
                    borderColor='black'
                    style={{marginTop: 20}}
                />

            </View>
         );
    }
}

const styles = StyleSheet.create({
    body: mainStyles.body,
    text: mainStyles.text,
    inputField: mainStyles.inputField,
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
})
 
export default StepsComponent;