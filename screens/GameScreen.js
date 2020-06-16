import React, {Component} from 'react';
import AppleHealthKit from 'rn-apple-healthkit';



import Database from '../Database.js';

const db = new Database();

class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
            isLoading: true,
            user: {},
            notFound: 'Pet not found',
         }
         this.checkUserExists = this.checkUserExists.bind(this)
         this.ifHasPet = this.ifHasPet.bind(this)
         this.getHealthKitSteps = this.getHealthKitSteps.bind(this)
         this.updatePetAge = this.updatePetAge.bind(this)
    }

    componentDidMount() {
        console.log('mount');
        // db.deleteAllUsers()
        this.getUser()
        this.getHealthKitSteps()
        
    }

    getUser() {
        console.log('hello from getUser');
        db.userById('1')
        .then((data) => {
            console.log('DATADATA', data)
            this.setState({
                user: data,
                isLoading: false,
            }, this.checkUserExists)
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        }, this.checkUserExists)
        console.log('user', this.state.user)
    }

    checkUserExists() {
        if(Object.keys(this.state.user).length === 0) return;
            this.setState({
                hasPet: true
            })
        console.log('USERUSER', this.state.user)
        this.updatePetAge()
    }

    getHealthKitSteps() {
       
        const PERMS = AppleHealthKit.Constants.Permissions;

        const healthKitOptions = {
            permissions: {
                read:  [
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

        let options = {
            startDate: (new Date(2020,5,10)).toISOString(),
            endDate:   (new Date()).toISOString(),
            includeManuallyAdded: true,
        };

        AppleHealthKit.getDailyStepCountSamples(options, (err, results) => {
            if (err) {
                return;
            }
            console.log('RESULTSRESULTSRESULTSRESULTSRESULTSRESULTS', results)
            const stepsSinceLastLogin = results.reduce((prev, cur) => {
                return prev + cur.value;
            }, 0);

            const date1 = new Date('7/13/2010');
            console.log('DATE1DATE1OTHER', date1);
            const date2 = new Date('12/15/2010');
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            console.log("DIFFDAYSOTHER", diffDays + " days");
        });
    });

    }
    
    updatePetAge() {
        const dateCreated = new Date(this.state.user.dateCreated);
        const currentDate = new Date(new Date().toISOString());
        const diffTime = Math.abs(currentDate - dateCreated);
        const petAge = Math.ceil((diffTime / (1000 * 60 * 60 * 24)));
        console.log('PETAGEPETAGE', petAge);
        
        const user = {
            ...this.state.user,
            petAge: petAge
        }
        db.updateUser(this.state.user.userId, user)
        console.log('UPDATEDUSERUPDATEDUSER', user);
        
    }

    ifHasPet() {
        if(this.state.hasPet) {
            return (
                <ButtonContainer onPress={() => this.props.navigation.navigate('Pet')}>
                    <ButtonText>Continue</ButtonText>
                </ButtonContainer>
            )
            
        } else {
            return (
                <ButtonContainer 
                    onPress={() => this.props.navigation.navigate('About')}>
                    <ButtonText>Create New Pet</ButtonText>
                </ButtonContainer>
            )
        }
    }

    render() { 
        return ( 
            <Container>
                <Header>HABBIT.</Header>
                {this.ifHasPet()}
            </Container>
         );
    }
}

export default GameScreen;