import React from 'react'
import { StyleSheet, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native'
import Sound from 'react-native-sound'

const EggComponent = () => {
   
    const animatedValue = new Animated.Value(0)

    const sound = new Sound(require('../assets/sounds/smallEggSound.mp3'), null, (error) => {
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
            <View>
                <TouchableWithoutFeedback onPress={() => handleAnimation()} >
                    <Animated.Image  style={[{
                        transform: [{
                            rotate: animatedValue.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ['-0.1rad', '0.1rad'],
                            })
                        }]    
                    }, styles.image]} 
                    source={require('../assets/images/boi1_egg.png')}
                    resizeMode="contain" /> 
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
    },
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

export default EggComponent;