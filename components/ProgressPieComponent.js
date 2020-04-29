import React from 'react'
import * as Progress from 'react-native-progress'

const ProgressPieComponent = (props) => {

    const calculateProgress = () => {
        return props.totalSteps / props.growthGoal
    }

    return ( 
        <Progress.Pie
        size={40}
        progress={this.calculateProgress} 
        />
     );
}
 
export default ProgressPieComponent;