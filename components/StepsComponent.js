import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native-gesture-handler';


class StepsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 2000,
            dailySteps: 3000,
            stepGoal: 5000
         }
         this.calculateProgress = this.calculateProgress.bind(this)
         this.handleStepChange = this.handleStepChange.bind(this)
    }

    calculateProgress(){
        return this.state.dailySteps / this.state.stepGoal
    }

    handleStepChange(event) {
        this.setState({
            totalSteps: this.state.totalSteps + event.target.value,
            dailySteps: event.target.value
        })
    }
    

    render() { 
        return ( 
            <View>
                <Text>{this.state.dailySteps} / {this.state.stepGoal}</Text>
                <Progress.Bar progress={this.calculateProgress()} width={200} animated={true}/>
                <TextInput 
                    style={styles.text} 
                    placeholder="Enter Steps" 
                    placeholderTextColor='ghostwhite'>
                </TextInput>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.handleStepChange}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        height: 30,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular'
    }
})
 
export default StepsComponent;