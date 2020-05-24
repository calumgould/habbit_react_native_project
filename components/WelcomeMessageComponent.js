import React from 'react'
import { Text, StyleSheet } from 'react-native'

import mainStyles from '../styles/MainStyles'

const WelcomeMessage = (props) => {
    return ( 
        <Text
        style={styles.header}>
        {props.title}
        </Text>
       );
    }
    
    const styles = StyleSheet.create({
      header: mainStyles.header,
    });
 
export default WelcomeMessage;