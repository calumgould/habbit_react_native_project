import React from 'react';

import RegisterPetComponent from '../components/RegisterPetComponent';

const CreateScreen = (props) => {
    const {route} = props;
    const {setPetName} = route.params;

    setPetName('Boi');

    return ( 
        <Container>
            <RegisterPetComponent setPetName={setPetName} />
            <ButtonContainer 
                onPress={() => props.navigation.navigate('Pet')}>
                <ButtonText>
                    Save pet
                </ButtonText>
            </ButtonContainer>
        </Container>
     );
}
 
export default CreateScreen;