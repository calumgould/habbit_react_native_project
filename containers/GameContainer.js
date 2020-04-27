import React, {Component} from 'react';
import WelcomeMessage from '../components/WelcomeMessageComponent.js'
import {View, Text, StyleSheet} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: true,
         }
    }

    ifHasPet() {
        if(this.state.hasPet) {
            return <ButtonComponent onPress={() => this.props.navigation.navigate('AboutScreen')} title='Continue'/>
        } else {
            return <ButtonComponent title='Create New Pet'/>
        }
    }

    render() { 
        return ( 
            <View style={styles.body}>
                <WelcomeMessage title='HABBIT.'/>
                {this.ifHasPet()}
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
})


 
export default GameContainer;