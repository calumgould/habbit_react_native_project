import React, { Component } from 'react';
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
        this.initialSetup = this.initialSetup.bind(this)
        this.getStepsSinceLastLogin = this.getStepsSinceLastLogin.bind(this)
    }

    componentDidMount() {
        // db.deleteAllUsers()
        this.getUser()
    }

    getUser() {
        console.log('hello from getUser');
        db.userById('1')
            .then((data) => {
                console.log('DATADATADATADATADATA', data)
                this.setState({
                    user: data,
                    isLoading: false,
                }, this.initialSetup)
            }).catch((err) => {
                console.log(err);
                this.setState = {
                    isLoading: false
                }
            }, this.initialSetup)
    }

    initialSetup() {
        this.checkUserExists()
        this.getHealthKitSteps()
        this.updatePetAge()
    }

    checkUserExists() {
        if (Object.keys(this.state.user).length === 0) return;
        this.setState({
            hasPet: true
        })
        console.log('USERUSER', this.state.user)
    }

    getHealthKitSteps() {

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
                console.log('GAMESCREENUSER', this.state.user)

                let user = {
                    ...this.state.user,
                    dailySteps: results.value
                }

                db.updateUser(this.state.user.userId, user)

                db.userById('1')
                    .then((data) => {
                        this.setState({
                            user: data,
                            isLoading: false,
                        }, this.getStepsSinceLastLogin)
                    })
            });
        });
    }

    getStepsSinceLastLogin() {

        const options = {
            startDate: this.state.user.lastLogin,
            endDate: new Date().toISOString(),
            includeManuallyAdded: true,
        };

        AppleHealthKit.getDailyStepCountSamples(options, (err, results) => {
            console.log('USERSTATEUSERSTATE', this.state.user);

            if (err) {
                return;
            }
            const stepsSinceLastLogin = results.reduce((prev, cur) => {
                return prev + cur.value;
            }, 0);
            console.log('STEPSSINCELASTLOGINSTEPSSINCELASTLOGIN', stepsSinceLastLogin);

            let user = {
                ...this.state.user,
                totalSteps: (parseInt(this.state.user.totalSteps) + stepsSinceLastLogin).toString(),
                lastLogin: options.endDate
            }
            db.updateUser(this.state.user.userId, user)
            user = {}
            console.log('LASTLOGINLASTLOGINLASTLOGIN', this.state.user.lastLogin);
        });
    }

    updatePetAge() {
        const dateCreated = new Date(this.state.user.dateCreated);
        const currentDate = new Date(new Date().toISOString());
        const diffTime = Math.abs(currentDate - dateCreated);
        const petAge = Math.ceil((diffTime / (1000 * 60 * 60 * 24)) + 1);
        console.log('PETAGEPETAGE', petAge);

        const user = {
            ...this.state.user,
            petAge: petAge
        }
        db.updateUser(this.state.user.userId, user)
    }

    ifHasPet() {
        if (this.state.hasPet) {
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