import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ProgressPieComponent from './ProgressPieComponent'

class EggComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            growthGoal: 5000
         }
    }
    render() { 
        return ( 
        <View>
            <ProgressPieComponent growthGoal={this.state.growthGoal} totalSteps={this.props.totalSteps}/>
            <Image style={styles.image} source={require('../assets/images/boi1_egg.png')} />
        </View>
         );
    }
}
 
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    }
})
 
export default EggComponent;