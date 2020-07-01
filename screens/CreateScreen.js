import React, {useState, useEffect} from 'react';

import RegisterPetComponent from '../components/RegisterPetComponent';
import User from '../components/UserComponent';

import { getInitialSteps } from '../helpers/AppleHealthKit';


const CreateScreen = (props) => {
    const [user, setUser] = useState({})
    const [userPetName, setUserPetName] = useState('')
    const [initialSteps, setInitialSteps] = useState(0)

    const handleNewUser = () => {
        console.log('INITIALSTEPS>>>>>>>>', initialSteps);
        
        setUser({
                userId: '1',
                petName: userPetName,
                petAge: '0',
                dateCreated: new Date().toISOString(),
                totalSteps: initialSteps,
                dailySteps: initialSteps,
                lastLogin: new Date().toISOString(),
                stepGoal: '15000'
            })
        }

    useEffect(() => { 
        getInitialSteps({setInitialSteps})
    }, [])

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
                // setPetName={setPetName} 
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