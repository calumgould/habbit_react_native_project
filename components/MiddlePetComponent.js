import React from 'react'
import { StyleSheet, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native'


const MiddlePetComponent = (props) => {
   
    const animatedValue = new Animated.ValueXY({x: 0, y: 0})

    const handleAnimation = () => {
       
        Animated.loop(
          Animated.sequence([
            Animated.timing(animatedValue, {toValue: {x: 1.0, y: 1.0}, duration: 150, easing: Easing.linear, useNativeDriver: true}),
            Animated.timing(animatedValue, {toValue: {x: -1.0, y: -1.0}, duration: 300, easing: Easing.linear, useNativeDriver: true}),
            Animated.timing(animatedValue, {toValue: {x: 0, y: 0}, duration: 150, easing: Easing.linear, useNativeDriver: true})
          ])
        , {iterations: 3}).start(); 
      }
 
    //   const revealText = () => {
    //       setTimeout(() => {
    //           return <Text>Hello</Text>
    //       }, 3000)
    //     }
    
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
                        source={require('../assets/images/boi1_medium.png')}
                        resizeMode="contain"    
                    /> 
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

export default MiddlePetComponent;