import React, {Component} from 'react';

import Database from '../Database.js';

const db = new Database();

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasPet: false,
            isLoading: true,
            users: [],
            notFound: 'Pet not found'
         }
         this.checkUserExists = this.checkUserExists.bind(this)
         this.ifHasPet = this.ifHasPet.bind(this)
         
    }

    componentDidMount() {
        console.log('mount');
        db.deleteAllUsers()
        this.getUsers()
    }

    getUsers() {
        console.log('hello from getUsers');
        db.listDetails()
        .then((data) => {
            console.log('DATADATA', data)
            this.setState({
                users: data,
                isLoading: false,
            }, this.checkUserExists)
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        }, this.checkUserExists)
        console.log('users', this.state.users)
    }

    checkUserExists() {
        if(this.state.users.length > 0){
            this.setState({
                hasPet: true
            })
        }
        console.log('USERSUSERS', this.state.users)
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

export default GameContainer;