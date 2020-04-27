import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        color: 'ghostwhite',
        fontSize: 26,
        fontFamily: 'PressStart2P-Regular',
      },
});

const Header = (props) => {
  return ( 
    <Text
    style={styles.header}>
    {props.title}
    </Text>
   );
}
 
export default Header;


