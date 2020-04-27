import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';


class StepsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 2000,
            dailySteps: 3000,
            stepGoal: 5000
         }
         this.calculateProgress = this.calculateProgress.bind(this)
    }

    calculateProgress(){
        return this.state.dailySteps / this.state.stepGoal
    }

    

    render() { 
        return ( 
            <View>
                <Text>{this.state.totalSteps} / {this.state.stepGoal}</Text>
                <Progress.Bar progress={this.calculateProgress()} width={200} animated={true}/>
            </View>
         );
    }
}
 
export default StepsComponent;