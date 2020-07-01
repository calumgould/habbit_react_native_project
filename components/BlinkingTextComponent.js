import React, { useState } from 'react';

const BlinkingText = ({text, color, size}) => {

  const [showText, setShowText] = useState(true)

  setInterval(() => {
    setShowText(!showText)
  }, 1000);

  let display = showText ? text : ' ';

    return (
        <StyledText color={color} size={size}>
          {display}
        </StyledText>
    );
}
 
export default BlinkingText;
