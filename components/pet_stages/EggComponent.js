import React from 'react';
import { Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';

import styles from '../../styles/styles';

const EggComponent = () => {
   
    const animatedValue = new Animated.Value(0)

    const sound = new Sound(require('../../assets/sounds/smallEggSound.mp3'), null, (error) => {
        if (error) {console.log("No sound played", error)}
        sound.play();
    });

    const handleAnimation = () => {
       sound.play();
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
                Animated.timing(animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
                Animated.timing(animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
            ])
        , {iterations: 3}).start(); 
    }
      
    return ( 
        <>
            <TouchableWithoutFeedback onPress={() => handleAnimation()}>
                <Animated.Image  style={[{
                    transform: [{
                        rotate: animatedValue.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ['-0.1rad', '0.1rad'],
                        })
                    }]    
                }, styles.image]} 
                source={require('../../assets/images/boi1_egg.png')}
                resizeMode="contain" /> 
            </TouchableWithoutFeedback>
        </>
    );
}

export default EggComponent;