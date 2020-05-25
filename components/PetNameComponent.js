import React from 'react';

const PetNameComponent = (props) => {
    return ( 
        <Header marginBottom='10%'>
            {props.petName}
        </Header>
     );
}
 
export default PetNameComponent;