import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import StepsComponent from '../components/StepsComponent.js';
import ProgressPieComponent from '../components/ProgressPieComponent';
import PetComponent from '../components/PetComponent'
import PetNameComponent from '../components/PetNameComponent'


class PetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalSteps: 0,
            growthGoal: 0
        }
        this.handleSteps = this.handleSteps.bind(this)
        // this.handleGrowth = this.handleGrowth.bind(this)
    }

    handleSteps(totalSteps){
        this.setState({
            totalSteps: totalSteps
        }) 
    }

    // handleGrowth(growthGoal){
    //     this.setState({
    //         growthGoal: growthGoal
    //     }) 
    // }

    render() { 
        return ( 
            <View style={styles.body}>
                <PetNameComponent />
                {/* <ProgressPieComponent /> */}
                <PetComponent totalSteps={this.state.totalSteps} />
                <StepsComponent getSteps={(totalSteps) => this.handleSteps(totalSteps)} /> 
            </View>
         );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'slategrey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular'
    }
})
 
export default PetContainer;