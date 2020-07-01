import React, { useEffect, useState } from 'react';

const PetNameComponent = ({petName}) => {

    const [name, setName] = useState('')

    useEffect(() => {
        setName(petName)
    }, [petName])

    return ( 
        <Header marginBottom='10%'>
            {name}
        </Header>
     );
}
 
export default PetNameComponent;