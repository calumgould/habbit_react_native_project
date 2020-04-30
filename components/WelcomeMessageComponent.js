import React from 'react'
import {Text, StyleSheet} from 'react-native'

const WelcomeMessage = (props) => {
    return ( 
        <Text
        style={styles.header}>
        {props.title}
        </Text>
       );
    }
    
    const styles = StyleSheet.create({
      header: {
          color: 'ghostwhite',
          fontSize: 35,
          fontFamily: 'PressStart2P-Regular',
          paddingBottom: 40,
          paddingLeft: 40,
        },
    });
 
export default WelcomeMessage;