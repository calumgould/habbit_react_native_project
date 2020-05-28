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
        this.getUser = this.getUser.bind(this)
        this.updateUserInfo = this.updateUserInfo.bind(this)
    }

    getUser() {
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
            petName: this.state.user.petName,
            totalSteps: this.state.user.totalSteps,
            growthSteps: this.state.user.totalSteps,
        })
        console.log('PETNAMEPETNAMEPETNAME', this.state.user.petName)
    }

    componentDidMount(){
        this.getUser()

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
                <PetComponent 
                totalSteps={this.state.totalSteps} 
                growthSteps={this.state.growthSteps}
                user={this.state.user}
                />
                <StepsComponent 
                user={this.state.user}
                getSteps={(totalSteps, growthSteps) => this.handleSteps(totalSteps, growthSteps)}
                />
            </Container>
         );
    }
}
 
export default PetScreen;