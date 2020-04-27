import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, } from 'react-native';


class BlinkingText extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
 
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    1000);
  }
 
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default BlinkingText;
