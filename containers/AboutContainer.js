import React, {Component} from 'react';
import {Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

class AboutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <SafeAreaView>
                <Text>Hello</Text>
            </SafeAreaView>
         );
    }
}
 
export default AboutContainer;