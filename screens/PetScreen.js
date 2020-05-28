import React, { Component } from 'react';

import StepsComponent from '../components/StepsComponent.js';
import PetComponent from '../components/PetComponent';
import PetNameComponent from '../components/PetNameComponent';
import MenuComponent from '../components/MenuComponent';
import User from '../components/UserComponent';
import Database from '../Database.js';

const db = new Database();

class PetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            petName: props.route.params.petName,
            totalSteps: 0,
            growthSteps: 0,
            user: {}
        }
        this.handleSteps = this.handleSteps.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.updateUserInfo = this.updateUserInfo.bind(this)
    }

    getUsers() {
        console.log('hello from getUsers');
        db.userById('1')
        .then((data) => {
            console.log('PETSCREENDATA', data)
            this.setState({
                user: data,
                isLoading: false,
            }, this.updateUserInfo)
        }).catch((err) => {
            console.log(err);
            this.setState = {
                isLoading: false
            }
        })
        console.log('PETSCREENUSER:', this.state.user)
    }

    updateUserInfo(){
        this.setState({
            petName: this.state.user.petName
        })
    }

    componentDidMount(){
        this.getUsers()
        // Name of pet

        // Current time

        //Steps from last login

        //total steps

        // user{}

        // saveuser(user)
    }

    handleSteps(totalSteps, growthSteps){
        this.setState({
            totalSteps: totalSteps,
            growthSteps: growthSteps
        }) 
    }

    render() { 
        return ( 
            <Container>
                <MenuComponent navigation={this.props.navigation}/>
                <PetNameComponent petName={this.state.petName} />
                <PetComponent totalSteps={this.state.totalSteps} growthSteps={this.state.growthSteps}/>
                <StepsComponent getSteps={(totalSteps, growthSteps) => this.handleSteps(totalSteps, growthSteps)} />
                {/* <User user={this.state.user} /> */}
            </Container>
         );
    }
}
 
export default PetScreen;