import React from 'react';

import AppNavigator from './AppNavigator';

import Container from './styled_components/Container';
import ButtonContainer from './styled_components/ButtonContainer';
import ButtonText from './styled_components/ButtonText';
import BodyText from './styled_components/BodyText';
import ListText from './styled_components/ListText';
import Header from './styled_components/Header';
import Scroll from './styled_components/Scroll';
import SubHeader from './styled_components/SubHeader';
import BlinkingWrapper from './styled_components/BlinkingWrapper';
import PetImage from './styled_components/PetImage';
import StyledTextInput from './styled_components/StyledTextInput';
import StyledText from './styled_components/StyledText';

console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
