import React from 'react'
import { StyleSheet, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native'
import Sound from 'react-native-sound'

import mainStyles from '../styles/MainStyles'

const SmallPetComponent = () => {
   
    const animatedValue = new Animated.ValueXY({x: 0, y: 0})

    const sound = new Sound(require('../assets/sounds/smallBoiSound.mp3'), null, (error) => {
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
            <View>
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
                    source={require('../assets/images/boi1_small.png')}
                    resizeMode="contain" /> 
                </TouchableWithoutFeedback>
            </View>
         );
}
 
const styles = StyleSheet.create({
    image: mainStyles.image,
    rotateText: {
        textAlign: 'center',
        fontSize: 10,
        color: 'ghostwhite',
        fontFamily: 'PressStart2P-Regular',
        transform: [{
            rotate: '40deg'
        }]
    },
})

 
export default SmallPetComponent;