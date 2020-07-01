import React, { Component } from 'react';

import Database from '../Database.js';

import {getHealthKitSteps} from '../helpers/AppleHealthKit';

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
        this.updatePetAge = this.updatePetAge.bind(this)
        this.initialSetup = this.initialSetup.bind(this)
    }

    componentDidMount() {
        // db.deleteAllUsers()
        this.getUser()
    }

    getUser() {
        db.userById('1')
            .then((data) => {
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
        getHealthKitSteps(this.state.user)
        this.updatePetAge()
    }

    checkUserExists() {
        if (Object.keys(this.state.user).length === 0) return;
        this.setState({
            hasPet: true
        })
        console.log('USERUSER', this.state.user)
    }

    updatePetAge() {
        const dateCreated = new Date(this.state.user.dateCreated);
        const currentDate = new Date(new Date().toISOString());
        const diffTime = Math.abs(currentDate - dateCreated);
        const petAge = Math.ceil((diffTime / (1000 * 60 * 60 * 24)) + 1);

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