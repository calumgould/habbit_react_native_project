import React, { Component } from 'react'
import { View, Text, Keyboard } from 'react-native'
import * as Progress from 'react-native-progress'
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import buttonStyles from '../styles/button'
import BlinkingText from './BlinkingTextComponent'


class StepsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 0,
            dailySteps: 0,
            stepGoal: 10000,
            enteredSteps: '',
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
                    style={[styles.text, {marginBottom: 10}]}>
                    Manual Step Input:
                </Text>

                <View style={styles.body}>
                    <View style={styles.inputField}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Enter steps" 
                            placeholderTextColor='grey'
                            value={this.state.enteredSteps.toString()}
                            keyboardType='numeric'
                            onChangeText={value => this.enterSteps(value)}
                            returnKeyLabel='Done'
                            returnKeyType='done'
                            onSubmitEditing={Keyboard.dismiss}
                        />
                        <Text style={styles.blinkingText}>
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

                <Text style={[styles.text, {fontSize: 16}]}>
                    Daily Steps
                </Text>

                <Text style={styles.stepCount}>
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
                    style={styles.progressBar}
                />

            </View>
         );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'slategrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        height: 30,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        paddingVertical: 10,
    },
    textInput: {
        textAlign: 'center',
        fontSize: 14,
        color: 'ghostwhite',
        paddingVertical: 10,
        fontFamily: 'PressStart2P-Regular',
    },
    blinkingText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'grey',
        paddingVertical: 10,
        fontFamily: 'PressStart2P-Regular',
        marginTop: 2,
    },
    stepCount: {
        textAlign: 'center',
        fontSize: 20,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
    },
    button: buttonStyles.button,
    buttonText: buttonStyles.buttonText,
    progressBar: {
        marginTop: 20,
    },
    inputField: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: 'darkslategrey',
        backgroundColor: 'darkslategrey',
        width: 310,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default StepsComponent;