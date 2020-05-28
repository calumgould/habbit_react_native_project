import React, {Component} from 'react';

import Database from '../Database.js';

const db = new Database();

class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
            isLoading: true,
            user: {},
            notFound: 'Pet not found'
         }
         this.checkUserExists = this.checkUserExists.bind(this)
         this.ifHasPet = this.ifHasPet.bind(this)
         
    }

    componentDidMount() {
        console.log('mount');
        this.getUser()
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