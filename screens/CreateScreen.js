import React, {useState, useEffect} from 'react';
import AppleHealthKit from 'rn-apple-healthkit';

import RegisterPetComponent from '../components/RegisterPetComponent';
import User from '../components/UserComponent';

const CreateScreen = (props) => {
    const {route} = props;
    const {setPetName} = route.params;

    // setPetName('Boi');

    const [user, setUser] = useState({})
    const [userPetName, setUserPetName] = useState('')
    const [initalSteps, setInitialSteps] = useState('')

    const handleNewUser = () => {
        setUser({
                userId: '1',
                petName: userPetName,
                petAge: '0',
                dateCreated: new Date().toISOString(),
                totalSteps: initalSteps,
                dailySteps: initalSteps,
                lastLogin: new Date().toISOString(),
            })
        }

        console.log('INITALSTEPS >>>>', initalSteps);
        
        useEffect(() => {
            getInitialSteps()
        }, [])

        const getInitialSteps = () => {

            const PERMS = AppleHealthKit.Constants.Permissions;
    
            const healthKitOptions = {
                permissions: {
                    read: [
                        PERMS.StepCount,
                        PERMS.Steps,
                    ],
                    write: [
                        PERMS.StepCount
                    ],
                }
            };
    
            AppleHealthKit.initHealthKit(healthKitOptions, (err, results) => {
                if (err) {
                    console.log("error initializing Healthkit: ", err);
                    return;
                }
    
                AppleHealthKit.getStepCount(null, (err, results) => {
                    if (err) {
                        return;
                    }
                    console.log(results.value);
                    
                    setInitialSteps(results.value)
                });
            });
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