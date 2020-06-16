import React, {useState} from 'react';

import RegisterPetComponent from '../components/RegisterPetComponent';
import User from '../components/UserComponent';

const CreateScreen = (props) => {
    const {route} = props;
    const {setPetName} = route.params;

    // setPetName('Boi');

    const [user, setUser] = useState({})
    const [userPetName, setUserPetName] = useState('')

    const handleNewUser = () => {
        setUser({
                userId: '1',
                petName: userPetName,
                petAge: '0',
                dateCreated: new Date().toISOString(),
                totalSteps: '0',
                dailySteps: '0',
                lastLogin: new Date().toISOString(),
            })
        }

    const handlePress = () => {
        props.navigation.navigate('Pet');
        handleNewUser();
    }

    const handlePetName = (petName) => {
        setUserPetName(petName)
    }

    return ( 
        <Container>
            <RegisterPetComponent 
                setPetName={setPetName} 
                getPetName={(petName) => handlePetName(petName)}
            />
            <ButtonContainer 
                onPress={handlePress}>
                <ButtonText>
                    Save pet
                </ButtonText>
            </ButtonContainer>
            <User newUser={user} />
        </Container>
     );
}
 
export default CreateScreen;