import React from 'react';
import { Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';
import styles from '../styles/styles';

const BigPetComponent = () => {
   
    const animatedValue = new Animated.ValueXY({x: 0, y: 0})

    const sound = new Sound(require('../assets/sounds/bigBoiTalk.mp3'), null, (error) => {
        if (error) {console.log("No sound played", error)}
        sound.play();
    });

    const handleAnimation = () => {
       sound.play()
        Animated.loop(
          Animated.sequence([
            Animated.timing(animatedValue, {toValue: {x: 1.0, y: 1.0}, duration: 150, easing: Easing.linear, useNativeDriver: true}),
            Animated.timing(animatedValue, {toValue: {x: -1.0, y: -1.0}, duration: 300, easing: Easing.linear, useNativeDriver: true}),
            Animated.timing(animatedValue, {toValue: {x: 0, y: 0}, duration: 150, easing: Easing.linear, useNativeDriver: true})
          ])
        , {iterations: 3}).start(); 
      }
        return ( 
            <>
                <TouchableWithoutFeedback onPress={() => handleAnimation()}>
                    <Animated.Image  
                    style={[{
                        transform: [{
                            translateY: animatedValue.y.interpolate({
                            inputRange: [-0.1, 0.1],
                            outputRange: [-1, 1],
                            })
                        }]    
                    }, styles.image]} 
                    source={require('../assets/images/boi1_big.png')}
                    resizeMode="contain" /> 
                </TouchableWithoutFeedback>
            </>
         );
}

export default BigPetComponent;