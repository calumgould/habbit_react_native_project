import React, { Component } from 'react';

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
        <StyledText color={this.props.color} size={this.props.size}>
          {display}
        </StyledText>
    );
  }
}

export default BlinkingText;
