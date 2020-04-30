import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

import AboutComponent from '../components/AboutComponent'

const InfoContainer = () => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
            <AboutComponent /> 
            <Text>{'\n'}{'\n'}</Text>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: 'slategrey',
      flex: 1,
    }
})
 
export default InfoContainer;