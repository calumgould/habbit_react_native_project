import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

import AboutComponent from '../components/AboutComponent'

import mainStyles from '../styles/MainStyles'

const InfoContainer = () => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollBody}>
            <AboutComponent /> 
            <Text>{'\n'}{'\n'}</Text>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    scrollBody: mainStyles.scrollBody
})
 
export default InfoContainer;