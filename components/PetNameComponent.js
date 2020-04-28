import React from 'react';
import {Text} from 'react-native';

const PetNameComponent = (props) => {
    return ( 
        <Text>{props.name}</Text>
     );
}
 
export default PetNameComponent;