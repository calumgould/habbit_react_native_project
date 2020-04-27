import React, {Component} from 'react';
import {Text, View} from 'react-native';
import StepsComponent from '../components/StepsComponent.js';


class PetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <View>
                <Text>Hello</Text>
                <StepsComponent />
            </View>
         );
    }
}
 
export default PetContainer;