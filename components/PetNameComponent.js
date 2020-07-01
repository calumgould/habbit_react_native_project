import React, { useEffect, useState } from 'react';

const PetNameComponent = ({petName}) => {

    // const [name, setName] = useState('')

    // useEffect(() => {
    //     setName(petName)
    // }, [petName])

    return ( 
        <Header marginBottom='10%'>
            {petName}
        </Header>
     );
}
 
export default PetNameComponent;