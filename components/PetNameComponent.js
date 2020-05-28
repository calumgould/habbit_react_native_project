import React, { useEffect, useState } from 'react';

const PetNameComponent = (props) => {

    const [name, setName] = useState('')

    useEffect(() => {
        setName(props.petName)
    }, [props])

    return ( 
        <Header marginBottom='10%'>
            {name}
        </Header>
     );
}
 
export default PetNameComponent;