import React, {Component} from 'react';
import Header from '../styles/header'

const WelcomeMessage = (props) => {
    return ( 
        <Header title={props.title} />
     );
}
 
export default WelcomeMessage;