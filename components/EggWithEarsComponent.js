import React from 'react';
import {Image, StyleSheet, View, Text, Animated, Easing, TouchableWithoutFeedback, useRef} from 'react-native';


const EggWithEarsComponent = (props) => {

    const animatedValue = new Animated.Value(0);
    // const fadeAnim = useRef(new Animated.Value(0)).current;
    

    const handleAnimation = () => {
        // A loop is needed for continuous animation
        Animated.loop(
          // Animation consists of a sequence of steps
          Animated.sequence([
            // start rotation in one direction (only half the time is needed)
            Animated.timing(animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
            // rotate in other direction, to minimum value (= twice the duration of above)
            Animated.timing(animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
            // return to begin position
            Animated.timing(animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
          ])
        , {iterations: 3}).start(); 
      }

    return ( 
        <View>
            <TouchableWithoutFeedback onPress={() => handleAnimation()}>
                    <Animated.Image  style={[{
                        transform: [{
                         rotate: animatedValue.interpolate({
                         inputRange: [-1, 1],
                         outputRange: ['-0.1rad', '0.1rad'],
                         })
                    }]    
                    }, styles.image]} 
                     source={require('../assets/images/boi1_egg_cracked.png')} resizeMode="contain"/>
                </TouchableWithoutFeedback>
        </View>
     );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        marginTop: 20,
        marginBottom: 60,
    }
})
 
export default EggWithEarsComponent;